<template>
  <div>
    <Logo/>
    <h1 class="title">
      {{ site.info }}
    </h1>
    <h2 class="subtitle" v-html="site.body.value">
    </h2>
  </div>
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

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
