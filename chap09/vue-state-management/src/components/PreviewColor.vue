<script setup>
import { useColorStore } from '@/stores/color'
import { computed } from 'vue'

const store = useColorStore()

const previewRGB = computed(() => {
  return {
    backgroundColor: store.hex
  }
})
</script>

<template>
  <div>
    <h2>Preview Color</h2>
    <div class="previewColor" :style="previewRGB"></div>
    <p>CSS color string: {{ previewRGB.backgroundColor }}</p>
  </div>
</template>

<style scoped>
.previewColor {
    width: 250px;
    height: 250px;
}
</style>