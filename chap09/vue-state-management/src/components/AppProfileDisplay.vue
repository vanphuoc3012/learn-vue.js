<script setup>
import {store} from "@/stores/store";

</script>

<template>
    <section class="md:w-1/3 bg-blue-200 flex p-12">
        <h3 class="font-bold font-lg">{{ store.name }}</h3>
        |
        <h3 class="font-bold font-lg">{{ store.occupation}}</h3>
    </section>
</template>

<style scoped>

</style>