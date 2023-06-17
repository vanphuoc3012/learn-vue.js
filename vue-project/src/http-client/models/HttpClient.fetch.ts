import { HttpClientInterface } from "./HttpClient.interface.ts";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface.ts";
import { UrlUtils } from "./UrlUtils.ts";
import { HttpContentTypes, HttpRequestMethods, HttpRequestTypes } from "./Constants.ts";

export class HttpClientFetch implements HttpClientInterface {
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

    const options: RequestInit = {
      credentials: "include",
      redirect: "follow",
      headers: {}
    };

    if (headers) {
      options.headers = { ...headers, "Content-Type": HttpContentTypes.applicationJson };
    }

    if (requiresToken && options.headers) {

    }

    let result!: R;

    const checkRedirect = async (resp: any) => {
      if (resp.redirected) {
        document.location = resp.url;
        return true;
      }
      return false;
    };

    try {
      switch (requestType) {
        case HttpRequestTypes.get: {
          options.method = HttpRequestMethods.get;
          const response = (await fetch(fullUrl, options)) as any;
          const redirected = await checkRedirect(response);
          if (!redirected) {
            result = (await response.json()) as R;
          }
          break;
        }
        case HttpRequestTypes.post: {
          options.method = HttpRequestMethods.post
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
          const response = (await fetch(fullUrl, options)) as any
          const redirected = await checkRedirect(response)
          if (!redirected) {
            result = (await response.json()) as R
          }
          break
        }
        case HttpRequestTypes.put: {
          options.method = HttpRequestMethods.put
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
          const response = (await fetch(fullUrl, options)) as any
          const redirected = await checkRedirect(response)
          if (!redirected) {
            result = (await response.json()) as R
          }
          break
        }
        case HttpRequestTypes.delete: {
          options.method = HttpRequestMethods.delete
          const response = (await fetch(fullUrl, options)) as any
          const redirected = await checkRedirect(response)
          if (!redirected) {
            result = (await response.json()) as R
          }
          break
        }
        case HttpRequestTypes.patch: {
          options.method = HttpRequestMethods.patch
          options.body = typeof payload === 'string' ? payload : JSON.stringify(payload)
          const response = (await fetch(fullUrl, options)) as any
          const redirected = await checkRedirect(response)
          if (!redirected) {
            result = (await response.json()) as R
          }
          break
        }
        default: {
          console.warn("HttpClientFetch: invalid requestType argument or request type not implemented");
        }
      }
    } catch (err) {
      console.error("HttpClientFetch: exception");
      throw Error("HttpClientFetch: exception");
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