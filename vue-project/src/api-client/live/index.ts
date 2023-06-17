import { ApiClientInterface } from "../models";
import { itemsApiClient } from "./items";

const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}

export {
  apiLiveClient
}