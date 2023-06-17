import { ApiClientInterface } from "../models";
import { itemsApiClient } from "./items";

const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}

export {
  apiMockClient
}