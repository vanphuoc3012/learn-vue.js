import { ItemInterface } from "../../../models";

export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}