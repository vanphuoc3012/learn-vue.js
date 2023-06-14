<script setup lang="ts">

import ItemList from "./components/ItemList.vue";
import { ItemInterface } from "./models";
import { reactive } from "vue";

const items: ItemInterface[] = reactive([{
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
}]);

const onSelectItem = (id: number) => {
  const item = items.find(o => o.id === id);
  if (!item) {
    console.warn(`onSelectItem: could not find item with id: ${id}`);
    return;
  }

  item.selected = !item.selected;
  console.log("onSelectItem", item.id, item.selected);
}
</script>

<template>
  <div class="home">
    <ItemList @selectItem="onSelectItem" :items="items" />
  </div>
</template>

<style scoped>

</style>
