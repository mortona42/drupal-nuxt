/**
 * Functions to get content from Contenta JSON API
 */
import jsonApi from './jsonApiClient';

export function mainMenu() {
  const query = {
    include: 'field_links',
    fields: {
      'node--page': 'title'
    }
  };
  return jsonApi.get(`block_content/menu/${process.env.mainMenuId}`, query);
}

export function loadPages() {
  return jsonApi.get('node/page');
}

export function loadSite() {
  return jsonApi.get(`block_content/menu/${process.env.siteUuid}`);
}
