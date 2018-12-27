<template>
  <div>
    <section class="container">
    <Menus v-bind="{ menus }" />
      <div>
        <Logo/>
        <Site v-bind="{site}"/>
        <div class="links">
          <a
            href="https://github.com/mortona42/drupal-nuxt/wiki"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/mortona42/drupal-nuxt"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
        <div class="pages">
          <h3>Pages</h3>
          <PageIndex v-bind="{ pages }" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Site from '~/components/Site.vue';
import PageIndex from '~/components/PageIndex.vue';
import Menus from '~/components/Menus.vue';

import {
  loadPages,
  mainMenu,
  loadSite
} from '~/lib/api';

export default {
  components: {
    Logo,
    Site,
    PageIndex,
    Menus
  },
  async asyncData({ params }) {
    return Promise.all([
      mainMenu(),
      loadPages(),
      loadSite()
    ]).then(values => {
      return {
        menus: values[0],
        pages: values[1],
        site: values[2]
      };
    });
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.links {
  padding: 15px;
}
</style>
