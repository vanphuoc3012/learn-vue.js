import { ItemsApiClientInterface, ItemsApiClientModel, ItemsApiClientOptions } from "../../models";

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/path/to/your/real/api/end-point'
  }
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

export {
  itemsApiClient
}