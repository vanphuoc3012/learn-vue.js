<script>
  export default {
    props: ['greeting', 'who']
  }
</script>

<template>
<div>
  {{greeting}} {{ who }}
</div>
</template>

<style scoped>

</style>