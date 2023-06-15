import { ItemsApiClientInterface } from "./ItemsApiClient.interface.ts";
import { ItemInterface } from "../../../models";
import { ItemsApiClientEndpoints, ItemsApiClientOptions } from "./ItemsApiClientOptions.interface.ts";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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
    return new Promise<ItemInterface[]>((resolve) => {
      const endpoint = this.endpoints.fetchItems;

      const options: AxiosRequestConfig = {
        headers: {}
      };

      axios
        .get(endpoint, options)
        .then((response: AxiosResponse) => {
          if (!this.mockDelay) {
            resolve(response.data as ItemInterface[]);
          } else {
            setTimeout(() => {
              resolve(response.data as ItemInterface[]);
            }, this.mockDelay);
          }
        })
        .catch((error: any) => {
          console.error("ItemsApiClient: HttpClient: Get: error", error);
        });
    });
  }

}