import { lcu } from "@/api/lcu";
import { useEffect, useState } from "react";
import { LCUFN } from "./updatableContent";
import { fetchLCU } from "@/api/fetch";

// this is to avoid accidental reload loops, so a limit to twice per second
const MIN_FETCH_INTERVAL_MS = 1000 * 0.5;

/**
 * Trick from https://stackoverflow.com/questions/48689273/get-namespace-from-class
 * Patches the namespaces for functions within a namespace recursively.
 * The namespaces are used to name the cache keys.
 * @param ns
 * @param path
 */
const patch = (ns: object, path?: string) => {
  Object.keys(ns).forEach((key: any) => {
    const value = (ns as any)[key];
    const currentNamespace = path ? `${path}` : "";
    const currentPath = path ? `${path}.${key}` : key;
    if (typeof value === "object") {
      patch(value, currentPath);
    }
    if (typeof value === "function") {
      Object.defineProperty(value, "namespace", {
        value: currentNamespace,
        configurable: true,
      });
    }
  });
};
patch({ lcu });

let listenerDestructor: (() => void) | null = null;
/**
 * This hook fetches an endpoint and stores the result in localStorage.
 * TBD cache invalidation strategy.
 * Useful for data that does not change often, like queues or maps list endpoints.
 */
export function useLCUGlobalCache<T, A extends any[]>(
  lcuFn: LCUFN<T, A>,
  ...args: A
) {
  const [value, setValue] = useState<void | T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const namespace = (lcuFn as any).namespace || "global";
    const key = `${namespace}.${lcuFn.name || "unknown"}`;
    const CACHE_KEY = `${key}.cache`;
    const LAST_FETCH_KEY = `${key}.lastFetch`;

    const cached: any = localStorage.getItem(CACHE_KEY);
    const lastFetch = parseInt(localStorage.getItem(LAST_FETCH_KEY) || "0", 10);
    const now = Date.now();

    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setValue(parsed);
        setLoading(false);
        return; // already cached, skip fetching
      } catch {
        console.warn("Corrupted queues.json cache, refetching...");
        localStorage.removeItem(CACHE_KEY);
      }
    }

    // Do not fetch if the last fetch was too recent
    if (now - lastFetch < MIN_FETCH_INTERVAL_MS) return;

    // console.log(`Fetching ${key} from LCU...`);

    if (listenerDestructor) listenerDestructor(); // remove previous listener if it exists
    listenerDestructor = fetchLCU(lcuFn, ...args).watch((update) =>
      update
        .catch((err: lcu.LCUConnectorRequestError) => {
          console.error(`Error fetching ${key}:`, err);
          setValue(null);
        })
        .then((data) => {
          // console.log(`Got cache update for ${key} from LCU`);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(LAST_FETCH_KEY, now.toString());
          setValue(data);
        })
    );
  }, []);

  return { value, loading };
}

/**
 * Clears the cached queues from localStorage.
 * This will not clear the cached queues if the rate limit is met and the request would be limited.
 */
export function refetchLCUGlobalCache<T, A extends any[]>(lcuFn: LCUFN<T, A>) {
  const namespace = (lcuFn as any).namespace || "global";
  const key = `${namespace}.${lcuFn.name || "unknown"}`;
  const CACHE_KEY = `${key}.cache`;
  const LAST_FETCH_KEY = `${key}.lastFetch`;

  const lastFetch = parseInt(localStorage.getItem(LAST_FETCH_KEY) || "0", 10);
  if (Date.now() - lastFetch < MIN_FETCH_INTERVAL_MS) return;
  localStorage.removeItem(CACHE_KEY);
}
