import { ItemsApiClientInterface } from "./ItemsApiClient.interface.ts";
import { ItemInterface } from "../../../models";
import { ItemsApiClientEndpoints, ItemsApiClientOptions } from "./ItemsApiClientOptions.interface.ts";
import axios, { AxiosRequestConfig } from "axios";

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
    return new Promise<ItemInterface[]> (async(resolve) => {
      const endpoint = this.endpoints.fetchItems;

      const options: AxiosRequestConfig = {
        headers: {}
      };

      try {
        const res = await axios.get(endpoint, options);

        if (!this.mockDelay) {
          resolve(res.data as ItemInterface[]);
        } else {
          setTimeout(() => {
            resolve(res.data as ItemInterface[]);
          }, this.mockDelay);
        }
      } catch (error) {
        console.error("ItemsApiClient: HttpClient: Get: error", error);
      }
    });
  }
}