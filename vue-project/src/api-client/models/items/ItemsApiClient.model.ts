import { ItemsApiClientInterface } from "./ItemsApiClient.interface.ts";
import { ItemInterface } from "../../../models";
import { ItemsApiClientEndpoints, ItemsApiClientOptions } from "./ItemsApiClientOptions.interface.ts";
import { HttpRequestParamsInterface } from "../../../http-client/models/HttpRequestParams.interface.ts";
import { HttpRequestTypes } from "../../../http-client/models/Constants.ts";
import { useHttpClient } from "../../../http-client";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

   fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestTypes.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay
    }
    return useHttpClient().request<ItemInterface[]>(requestParameters);
    // return new Promise<ItemInterface[]> (async(resolve) => {
    //   const endpoint = this.endpoints.fetchItems;
    //
    //   const options: AxiosRequestConfig = {
    //     headers: {}
    //   };
    //
    //   try {
    //     const res = await axios.get(endpoint, options);
    //
    //     if (!this.mockDelay) {
    //       resolve(res.data as ItemInterface[]);
    //     } else {
    //       setTimeout(() => {
    //         resolve(res.data as ItemInterface[]);
    //       }, this.mockDelay);
    //     }
    //   } catch (error) {
    //     console.error("ItemsApiClient: HttpClient: Get: error", error);
    //   }
    // });
  }
}