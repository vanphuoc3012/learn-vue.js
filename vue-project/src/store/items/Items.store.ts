import { reactive } from "vue";
import { ItemStateInterface } from "./models";
import { ItemInterface } from "../../models";

const itemsState = reactive<ItemStateInterface>({
  loading: false,
  items: []
});

const actions = {
  loadItems: async () => {
    console.log("loading data")
    itemsState.loading = true;
    itemsState.items = [];

    let mockData: ItemInterface[] = [{
      id: 1,
      name: "Item 1",
      selected: false
    }, {
      id: 2,
      name: "Item 2",
      selected: false
    }, {
      id: 3,
      name: "Item 3",
      selected: false
    }, {
      id: 4,
      name: "Item 4",
      selected: false
    }, {
      id: 5,
      name: "Item 5",
      selected: false
    }];

    setTimeout(() => {
      itemsState.items = mockData;
      itemsState.loading = false;
    }, 1000);
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