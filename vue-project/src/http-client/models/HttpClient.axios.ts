import { HttpClientInterface } from "./HttpClient.interface.ts";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface.ts";
import { UrlUtils } from "./UrlUtils.ts";
import axios, { AxiosRequestConfig } from "axios";
import { HttpRequestTypes } from "./Constants.ts";

export class HttpClientAxios implements HttpClientInterface {
  constructor() {
  }

  async request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R> {
    const {
      requestType,
      endpoint,
      requiresToken,
      payload,
      headers,
      mockDelay
    } = parameters;

    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    console.log("HttpClientAxios: fullUrl: ", fullUrl, payload);

    const options: AxiosRequestConfig = {
      headers: {},
      maxRedirects: 0
    };

    if (headers) {
      options.headers = { ...headers };
    }

    if (requiresToken && options.headers) {
      options.withCredentials = true;
    }

    let result!: R;

    try {
      switch (requestType) {
        case HttpRequestTypes.get: {
          const res = await axios.get(fullUrl, options);
          result = res?.data as R;
          break;
        }
        case HttpRequestTypes.post: {
          const res = await axios.post(fullUrl, payload, options);
          result = res?.data as R;
          break;
        }
        case HttpRequestTypes.put: {
          const res = await axios.put(fullUrl, payload, options);
          result = res?.data as R;
          break;
        }
        case HttpRequestTypes.delete: {
          const res = await axios.delete(fullUrl, options);
          result = res?.data as R;
          break;
        }
        case HttpRequestTypes.patch: {
          const res = await axios.patch(fullUrl, payload, options);
          result = res?.data as R;
          break;
        }
        default: {
          console.warn("HttpClientAxios: invalid requestType argument or request type not implemented");
        }
      }
    } catch (e) {
      console.error("HttpClientAxios: exception", e);
      throw new Error("HttpClientAxios: exception");
    }

    if ((mockDelay || 0) > 0) {
      return new Promise<R>((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, mockDelay);
      });
    }
    return result;
  }

}