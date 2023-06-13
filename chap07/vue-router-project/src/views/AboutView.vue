<template>
  <div class="about">
    <h1>About {{ user }}</h1>
    <h1>This is an about page</h1>
    <h2>I'm learning view router</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { defineProps } from 'vue'

const route = useRoute()
const props = defineProps({
  user: String
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>