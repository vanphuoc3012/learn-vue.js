<script setup lang="ts">

import ItemList from "../components/ItemList.vue";
import { computed, defineComponent, onMounted } from "vue";
import { useAppStore } from "../store/items";
import { ItemInterface } from "../models";

export default defineComponent({
  name: "Home",
  components: {
    ItemList
  },
  setup() {
    const { itemStore } = useAppStore();
    const { actions: itemStoreActions } = itemStore;

    const items = computed((): ItemInterface[] => {
      return itemStore.getters.items;
    });

    const loading = computed((): boolean => {
      return itemStore.getters.loading;
    });

    const onSelectItem = async (id: number) => {
      await itemStoreActions.toggleItemSelected(id);
    };

    onMounted(async () => {
      await itemStoreActions.loadItems();
    });

    return {
      items, loading, onSelectItem
    }
  }
});
</script>

<template>
  <div>
    <ItemList items="items" loading="loading" @selectItem="onSelectItem"></ItemList>
  </div>
</template>

<style scoped>

</style>