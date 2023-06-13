<script setup>
  import {defineProps} from 'vue'
  import {ref} from 'vue'
  import users from '../assets/users'

  const name = ref('');
  const age = ref(0);

  const props = defineProps(['id']);
  name.value = users[props.id - 1].name;
  age.value = users[props.id - 1].name;
</script>

<template>
  <div>
    <h1>
      About User: {{$route.params.id}}
    </h1>
    <RouterLink :to="`/user/${$route.params.id}/info`">Info</RouterLink> |
    <RouterLink :to="`/user/${$route.params.id}/extra`">Extra</RouterLink>
  </div>
  <RouterView/>
</template>

<style scoped>

</style>