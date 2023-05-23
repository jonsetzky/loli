export type LCUConnectorRequestError = {
  reason: "clientoffline" | "httperror";
  error: any;
};

export interface ILCUResult<T> {
  /**
   * Rejects into LCUConnectorRequestError
   * @returns
   */
  get: () => Promise<T>;
  watch: (
    onUpdate: (
      /**
       * Rejects into LCUConnectorRequestError
       * @returns
       */
      value: Promise<T>
    ) => void
  ) => Destructor;
}

type Destructor = () => void;

export interface ILCUConnector {
  request: <T>(url: string, method: string, args?: any) => ILCUResult<T>;
}
