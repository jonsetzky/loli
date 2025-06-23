import { useEffect, useState } from "react";

const QUEUES_KEY = "queues.json";
const LAST_FETCH_KEY = "queues.json.lastFetch";
const QUEUES_URL =
  "https://static.developer.riotgames.com/docs/lol/queues.json";

// this is to avoid accidental reload loops, so a limit of once every 5 seconds will suffice
const MIN_FETCH_INTERVAL_MS = 1000 * 5;

const MAX_CACHE_INTERVAL_MS = 1000 * 60 * 60 * 24; // 24 hours

export function useCachedQueues() {
  const [queues, setQueues] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(QUEUES_KEY);
    const lastFetch = parseInt(localStorage.getItem(LAST_FETCH_KEY) || "0", 10);
    const now = Date.now();

    // Force fetch if the cache is old enough
    if (now - lastFetch < MAX_CACHE_INTERVAL_MS)
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed)) {
            setQueues(parsed);
            setLoading(false);
            return; // ✅ already cached, skip fetching
          }
        } catch {
          console.warn("Corrupted queues.json cache, refetching...");
          localStorage.removeItem(QUEUES_KEY);
        }
      }

    // Do not fetch if the last fetch was too recent
    if (now - lastFetch < MIN_FETCH_INTERVAL_MS) return;

    // Only fetch if not in cache
    fetch(QUEUES_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          localStorage.setItem(QUEUES_KEY, JSON.stringify(data));
          localStorage.setItem(LAST_FETCH_KEY, now.toString());
          setQueues(data);
        } else {
          throw new Error("Invalid queues.json format");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch queues.json:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { queues, loading };
}

/**
 * Clears the cached queues from localStorage.
 * This will not clear the cached queues if the rate limit is met and the request would be limited.
 */
export function refetchCachedQueues() {
  const lastFetch = parseInt(localStorage.getItem(LAST_FETCH_KEY) || "0", 10);
  if (Date.now() - lastFetch < MIN_FETCH_INTERVAL_MS) return;
  localStorage.removeItem(QUEUES_KEY);
}
