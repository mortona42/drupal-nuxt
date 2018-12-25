<template>
  <div class="PageTitleLink">
    <a :href="'http://drupal.drupal-nuxt.lndo.site/jsonapi/node/page/' + page.attributes.id">
      {{ page.attributes.title }}
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      page: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
