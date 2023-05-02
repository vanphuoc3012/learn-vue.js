<script>
export default {
  props: {
    times: {
      type: Number
    },
    content: {
      type: String
    }
  },
  computed: {
    repetitions() {
      return Array.from({length: this.times});
    }
  }
}
</script>

<template>
<span v-for="r in repetitions" :key="r">{{content}}</span>
</template>

<style scoped>

</style>