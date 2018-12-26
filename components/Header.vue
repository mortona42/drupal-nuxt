<template>
  <header>
    <h1>{{ site.info }}</h1>
    <div v-html="site.body.value" />
  </header>
</template>

<script>
  export default {
    props: {
      site: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
