import { reactive } from "vue";
import { ItemStateInterface } from "./models";
import { apiClient } from "../../api-client";

const itemsState = reactive<ItemStateInterface>({
  loading: false,
  items: []
});

const actions = {
  loadItems: async () => {
    console.log("loading data")
    itemsState.loading = true;
    itemsState.items = [];

    itemsState.items = await apiClient.items.fetchItems();
    itemsState.loading = false;
  },
  toggleItemSelected: async (id: number) => {
    const item = (itemsState.items || []).find(
      (o) => o.id === id
    );
    if (item) {
      item.selected = !item.selected;
    }
  }
};

const getters = {
  get loading() {
    return itemsState.loading;
  },
  get items() {
    return itemsState.items;
  }
}

export interface ItemsStore {
  getters: typeof getters;
  actions: typeof actions;
}

export function useItemsStore(): ItemsStore {
  return {
    getters,
    actions
  }
}