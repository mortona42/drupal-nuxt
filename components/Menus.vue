<template>
  <nav>
    {{menus}}
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
  
