<script setup>
import { useColorStore } from '@/stores/color'

const store = useColorStore()
</script>

<template>
  <div>
    <h2>Edit RGB</h2>
    <label for="red">Red</label>
    <input type="range" min="0" max="255" id="red" v-model="store.red" />
    <br />
    <label for="green">Green</label>
    <input type="range" min="0" max="255" id="green" v-model="store.green" />
    <br />
    <label for="blue">Blue</label>
    <input type="range" min="0" max="255" id="blue" v-model="store.blue" />

    <div>
      <button
        class="mx-2 border-2 rounded bg-amber-200"
        @click="store.lightten()"
      >Lighten</button>
      <button
        class="mx-2 border-2 rounded bg-gray-800 text-white"
        @click="store.darken()"
      >Darken</button>
    </div>
  </div>
</template>

<style scoped>
label {
    display: inline-block;
    width: 50px;
}
</style>
