<script>
export default {
  props: {
    selected: {
      type: String
    },
    options: {
      type: Array,
      validator(options) {
        return options.every(o => Boolean(o.value && o.label));
      }
    }
  }
}
</script>

<template>
<div>
  <select>
    <option :selected="selected === o.value"
    v-for="o in options" :key="o.value">{{o.label}}</option>
  </select>
</div>
</template>

<style scoped>

</style>