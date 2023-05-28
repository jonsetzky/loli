import { lcu } from "./lcu";
import { LCUConnector } from "./lcuConnector";

export type LCUFN<T, A extends any[]> = (
  connector: lcu.ILCUConnector,
  ...args: A
) => lcu.ILCUResult<T>;

/**
 * Fetches by taking a fetch function as an argument.
 * @param lcuFn LCU function reference
 * @param args Arguments to the LCU function
 * @returns LCU result
 */
export function fetchLCU<T, A extends any[]>(
  lcuFn: LCUFN<T, A>,
  ...args: A
): lcu.ILCUResult<T> {
  return lcuFn(new LCUConnector(), ...args);
}
