<template>
  <div class="PageIndex">
    <div v-for="page in pages.data">
      {{page.attributes}}
      {{ page.attributes.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>

