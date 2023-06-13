<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppProfileForm from "@/components/AppProfileForm.vue";
import AppProfileDisplay from "@/components/AppProfileDisplay.vue";
import { reactive } from "vue";

const formData = reactive({name: ''});

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
</div>
</template>

<style scoped>

</style>
