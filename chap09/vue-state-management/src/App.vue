<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppProfileForm from '@/components/AppProfileForm.vue'
import AppProfileDisplay from '@/components/AppProfileDisplay.vue'
import { reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
import EditCounter from '@/components/EditCounter.vue'
import RGBEdit from '@/components/RGBEdit.vue'
import PreviewColor from '@/components/PreviewColor.vue'

const formData = reactive({ name: '' })
const store = useCounterStore()

function update(e) {
  formData.name = e.name
  console.log(formData.name)
}
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm @submit="update($event)" />
      <AppProfileDisplay />
    </div>

    <div>
      <p>Counter: {{ store.count }}</p>
      <EditCounter />
      <br />
      <button class="mt-3 border-gray-600 border-solid" type="button" @click="store.doubleCount">
        Double Counter
      </button>
      <br />
      <button class="border-solid border-gray-600 mt-3" type="button" @click="store.increment()">
        Increase Counter
      </button>
    </div>
  </div>
  <div class="border-2 border-gray-600">
    <h1>Color Editor</h1>
    <p>Use the sliders below to set the red, green, and blue values for a color.</p>
    <div class="two-col">
      <RGBEdit></RGBEdit>
      <PreviewColor></PreviewColor>
    </div>
  </div>
</template>

<style scoped>
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}
</style>