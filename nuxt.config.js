const serverBaseUrl = 'http://drupal.drupal-nuxt.lndo.site';
const serverFilesUrl = 'http://drupal.drupal-nuxt.lndo.site';
const mainMenuId = '6589136c-b071-4764-9604-46b70e955178';

export default {
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/jsonapi',
    serverFilesUrl,
    mainMenuId
  },
};

