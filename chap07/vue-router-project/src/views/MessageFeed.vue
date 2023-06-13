<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  messages: {
    default: [],
    type: Array
  }
})
</script>

<template>
  <div>
    <h2>Message Feed</h2>
    <div v-for="(m, i) in messages">
      <RouterLink :to="`/message/${i}`">{{ m.content }}</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>