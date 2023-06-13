<script setup>
const { message } = defineProps({
  id: {
    default: '',
    type: String
  },
  message: {
    default: () => ({
      author: '',
      type: Object
    })
  }
})
</script>

<template>
  <h3>Author:</h3>
  <p>{{}}</p>
</template>

<style scoped></style>