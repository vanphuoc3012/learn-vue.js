/**
 * @Name ItemsApiClientEndpoints
 * @description
 * Interface for the Items urls used to avoid hard-code strings
 */
export interface ItemsApiClientEndpoints {
  fetchItems: string
}

export interface ItemsApiClientOptions {
  mockDelay?: number,
  endpoints: ItemsApiClientEndpoints
}