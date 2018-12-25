const serverBaseUrl = 'http://drupal.drupal-nuxt.lndo.site';
const serverFilesUrl = 'http://drupal.drupal-nuxt.lndo.site';

export default {
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/jsonapi',
    serverFilesUrl,
  },
};

