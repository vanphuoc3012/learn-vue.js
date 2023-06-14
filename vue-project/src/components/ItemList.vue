<script setup lang="ts">
import { ItemInterface } from "../models";

defineProps<{ items: ItemInterface[] }>();

const emit = defineEmits<{(    e: 'selectItem', id: number): any}>();

const handleClick = (item: ItemInterface) => {
  console.log("handleClick", item.id, item.selected);
  emit('selectItem', item.id);
};
</script>

<template>
  <h3>Items: </h3>
  <ul>
    <li v-for="(item, index) in items"
        :key="item.id"
        @click="handleClick(item)"
    >
      {{ item.name }} [{{item.selected}}]
    </li>
  </ul>
</template>

<style scoped>

</style>