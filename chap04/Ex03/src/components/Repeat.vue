<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.times === 'number' && typeof value.content === 'string'
      }
    }
  },
  computed: {
    repetitions() {
      return Array.from({length: this.config.times})
    }
  }
}
</script>

<template>
<div>
  <span v-for="r in repetitions" :key="r">{{config.content}}</span>
</div>
</template>

<style scoped>

</style>