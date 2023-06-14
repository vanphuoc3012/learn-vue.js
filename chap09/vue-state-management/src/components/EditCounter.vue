<script setup>
  import { useCounterStore } from "@/stores/counter";

  const store = useCounterStore();
</script>

<template>
  <h2>Edit Counter</h2>
  <input class="bg-green-500" type="text" v-model="store.count"/>
</template>

<style scoped></style>
