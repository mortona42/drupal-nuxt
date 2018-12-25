<template>
  <div class="PageIndex">
    <div v-for="page in pages">
      <PageTitleLink v-bind="{page}" />
    </div>
  </div>
</template>

<script>
import PageTitleLink from '~/components/PageTitleLink.vue';

export default {
  components: {
    PageTitleLink
  },
  props: {
    pages: {
      type: Array,
      default: () => []
    }
  }
};
</script>

