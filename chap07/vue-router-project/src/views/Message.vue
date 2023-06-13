<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  content: {
    default: 'There is no message for this page',
    type: String
  }
})
</script>

<template>
  <div>
    <p>{{ content }}</p>
  </div>

</template>



<style scoped></style>