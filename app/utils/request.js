import 'whatwg-fetch';
import axios from 'axios';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  // console.log(response);
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  // console.log('===========');
  // console.log(response.data);
  return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  // console.log(response);
  // console.log(response.status);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // console.log(response);
  const error = new Error(response.statusText);
  // console.log(response.json());

  // response.json().then(data => {
  //   console.log(data);
  //   console.log(data.code);
  //   return data;
  // });

  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  console.log(options.method);
  console.log(options.headers);
  return axios({
    method: options.method,
    url,
    data: options.data,
    headers: options.headers,
  });
  // return axios(url, options.)
  //   .then(checkStatus)
  //   .then(parseJSON);
}
