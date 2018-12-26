const serverBaseUrl = 'http://drupal.drupal-nuxt.lndo.site';
const serverFilesUrl = 'http://drupal.drupal-nuxt.lndo.site';
const mainMenuId = '6589136c-b071-4764-9604-46b70e955178';
const siteUuid = 'c3c8fd57-a47d-46f5-81f1-acf0bd52daa9';

export default {
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/jsonapi',
    serverFilesUrl,
    mainMenuId,
    siteUuid
  },
};

