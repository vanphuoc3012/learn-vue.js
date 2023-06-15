<script setup lang="ts">
import { ItemInterface } from "../models";
import ItemComponent from "./Item.vue";

defineProps<{
  items: ItemInterface[],
  loading: boolean
}>();

const emit = defineEmits<{ (e: "selectItem", id: number): any }>();

const handleClick = (item: ItemInterface) => {
  console.log("handleClick", item.id, item.selected);
  emit("selectItem", item.id);
};
</script>

<template>
  <h3>Items: </h3>
  <ul>
    <ItemComponent v-for="(item, index) in items"
                   :key="item.id"
                   :model="item"
                   @click="handleClick(item)"
    >
      {{ item.name }} [{{ item.selected }}]
    </ItemComponent>
  </ul>
</template>

<style scoped>
ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0px;
}

</style>