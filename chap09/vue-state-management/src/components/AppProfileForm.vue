<script setup>
  import { ref } from "vue";

  const emit = defineEmits(['submit'])
  const name = ref('');

  function submitForm() {
    emit('submit', {
      name: this.name
    })
  }
</script>

<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center bg-red-200">
    <!--  Inputs-->
    <label class="flex text-gray-800 mb-2">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      class="border-2 border-solid border-blue-200 rounded px-2 py-1"
    />

    <div>
      <button type="submit" @click="submitForm()" class="">Submit</button>
    </div>
  </section>
</template>

<style scoped></style>
