/**
 * Client for JSON API server.
 * We use "jsonapi-parse" package to format responses :
 * It resolves relationships and included objects nicely in the final data object.
 */
import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import qs from 'qs';

// Add a response interceptor to format response with jsonapi-parse

export default {
  get: (uri, params = null) => {
    const url = 'http://drupal.drupal-nuxt.lndo.site/jsonapi/node/page';
    return axios.get(url);
  },
};
