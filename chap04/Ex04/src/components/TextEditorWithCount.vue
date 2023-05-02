<script>
import * as Countable from 'countable';
export default {
  data() {
    return {
      count: null
    }
  },
  beforeUnmount() {
    Countable.off(this.$refs.textArea)
  },
  mounted() {
    Countable.on(this.$refs.textArea, (count) => {
      this.count = count
    })
  }
}
</script>

<template>
  <div>
    <textarea ref="textArea" cols="50" rows="7"></textarea>
    <ul v-if="count">
      <li>Paragraphs: {{ count.paragraphs }}</li>
      <li>Sentences: {{ count.sentences }}</li>
      <li>Words: {{ count.words }}</li>
    </ul>
  </div>
</template>

<style scoped></style>