<template>
  <nav>
    <span v-for="link in menus.field_links">{{ link.title }}</span>
  </nav>
</template>

<script>
export default {
  props: {
    menus: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
  
