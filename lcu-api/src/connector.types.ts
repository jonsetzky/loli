export type LCUConnectorRequestError = {
  reason: "clientoffline";
};

export interface LCUErrorResult {
  error: LCUConnectorRequestError;
  hasError: () => this is LCUErrorResult;
}
export interface LCUSuccessResult<T> {
  /**
   * @returns Data from the request
   */
  get: () => Promise<T>;
  /**
   * Sets a callback for the URI of the request. Called when the
   * url receives an update. Callback is immediately called for data
   * received from initial request.
   * @returns Destructor to unwatch
   */
  watch: (callback: (value: T) => void) => Destructor;

  hasError: () => this is LCUErrorResult;
}
type Destructor = () => void;
export type LCUResult<T> = LCUSuccessResult<T> | LCUErrorResult;

export interface ILCUConnector {
  request: <T>(url: string, method: string, args?: any) => LCUResult<T>;
}
