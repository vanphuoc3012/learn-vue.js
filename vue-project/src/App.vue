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
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <div class="home">
    <ItemList
      :items="items"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.home {
    padding: 20px;
}

</style>
