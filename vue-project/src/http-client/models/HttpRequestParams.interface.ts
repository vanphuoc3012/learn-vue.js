import { HttpRequestTypes } from "./Constants.ts";

export interface HttpRequestParamsInterface<P = void> {
  requestType: HttpRequestTypes,
  endpoint: string,
  requiresToken: boolean,
  headers?: {[key: string]: string},
  payload?: P
  mockDelay?: number
}