import type { Lockfile } from "electron/main/lcu/lockfile";
import { useEffect, useState } from "react";

export const useLockfile = () => {
  const [lockfile, setLockfile] = useState<Lockfile | null>(null);

  const fetchLockfile = async () =>
    setLockfile(await window.electron.getLockfile());

  useEffect(() => {
    const timeout = setInterval(async () => fetchLockfile(), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return lockfile;
};
