<script>
export default {
  data() {
    return {
      message: null
    }
  },
  methods: {
    send() {
      this.$emit('send', this.message)
    }
  }
}
</script>

<template>
<div>
  <input v-model="message">
  <button @click="send">Emit inline</button>
</div>
</template>

<style scoped>

</style>