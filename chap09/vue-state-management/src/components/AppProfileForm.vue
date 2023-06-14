<script setup>
import {store} from "@/stores/store";


function clear() {
    store.name = '';
    store.occupation = '';
}
</script>

<template>
    <section class="md:w-2/3 flex flex-col p-12 items-center">
        <!--  Inputs-->
        <div class="flex flex-col mt-2">
            <label class="flex text-gray-800 mb-2" for="name">Name</label>
            <input
                    id="name"
                    type="text"
                    name="name"
                    class="border-2 border-solid border-blue-200 rounded px-2 py-1"
                    v-model="store.name"
            />
        </div>
        <div class="flex flex-col mt-2">
            <label class="flex text-gray-800 mb-2" for="name">Occupation</label>
            <input
                    id="occupation"
                    type="text"
                    name="occupation"
                    class="border-2 border-solid border-blue-200 rounded px-2 py-1"
                    v-model="store.occupation"
            />
        </div>

        <div class="w-1/2 flex md:flex-row mt-12">
<!--            <button type="submit" class="flex md:w-1/2 justify-center">Submit</button>-->
        </div>
    </section>
</template>

<style scoped></style>
