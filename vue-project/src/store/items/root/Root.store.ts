import { useItemsStore } from "../Items.store.ts";

export function useAppStore() {
  return {
    itemStore: useItemsStore()
  };
}

export type RootStore = ReturnType<typeof useAppStore>;