import { ItemInterface } from "../../../models";

export interface ItemStateInterface {
  loading: boolean,
  items: ItemInterface[]
}