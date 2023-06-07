<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount
} from 'vue'

const list = ref([
  'Apex Legends',
  'A Plague Tale: Innocence',
  'ART SQOOL',
  'Baba Is You',
  'Devil May Cry 5',
  'The Division 2',
  'Hypnospace Outlaw',
  'Katana ZERO'
])

const deleteItem = (value) => {
  list.value = list.value.filter((item) =>
    item !== value
  )
}

onMounted(() => {
  alert('mounted: DOM Ready to use')
})

onBeforeMount(() => {
  alert('beforeMount: DOM not ready to use')
})

onUpdated(() => {
  alert('updated: virtual DOM will be update after you click OK')
})

onBeforeUpdate(() => {
  alert('beforeUpdate: we know an update is about happen, and have the data')
})

onUnmounted(() => {
  alert('unmounted: this component has been destroyed')
})

onBeforeUnmount(() => {
  alert('beforeUnmount: about to blow up this component')
})
</script>

<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <button type="button" @click="deleteItem(item)">Delete {{ item }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>