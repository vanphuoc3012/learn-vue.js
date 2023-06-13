<script setup>
  const {message} = defineProps({
    id: {
      default: '',
      type: String
    },
    message: {
      default: () => ({ sent: '' }),
      type: Object
    }

  })
</script>

  <template>

  </template>

<style scoped>

</style>