/**
 * Client for JSON API server.
 * We use "jsonapi-parse" package to format responses :
 * It resolves relationships and included objects nicely in the final data object.
 */
import jsonapiParse from 'jsonapi-parse';
import axios from 'axios';
import qs from 'qs';

// Add a response interceptor to format response with jsonapi-parse
// https://github.com/axios/axios#interceptors
axios.interceptors.response.use(response => {
  response = jsonapiParse.parse(response.data).data;
  console.log(response);
  return response;
});

export default {
  get: (uri, params = null) => {
    const query = params ? '?' + qs.stringify(params, { indices: false }) : '';
    const url = `${process.env.serverApiUrl}/${uri}${query}`;
    return axios.get(url);
  },
};
