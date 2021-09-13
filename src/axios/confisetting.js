import React from 'react';
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Cancel,
  CancelToken,
  CancelTokenSource,
  Canceler
} from '../../';

const axios = require('axios').default;
const axios = require('axios');

const config: AxiosRequestConfig = {
  url:'movie',
  method:'get',
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing?',
    transformRequest: (data: any) => '{"foo":"bar"}',
  transformResponse: [
    (data: any) => ({ baz: 'qux' })
  ],
  headers: { 'X-FOO': 'bar' },
  params: { api_key: e7d1a25f4b340e09aa16db0f949d2a5e },
  paramsSerializer: (params: any) => 'api_key=e7d1a25f4b340e09aa16db0f949d2a5e',
  data: { foo: 'bar' },
  timeout: 10000,
  withCredentials: true,
    responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  onUploadProgress: (progressEvent: ProgressEvent) => {},
  onDownloadProgress: (progressEvent: ProgressEvent) => {},
  maxContentLength: 2000,
  maxBodyLength: 2000,
  validateStatus: (status: number) => status >= 200 && status < 300,
  maxRedirects: 5,
  proxy: {
    host: 'localhost',
    port: 3000
  },
  cancelToken: new axios.CancelToken((cancel: Canceler) => {})
};
const nullValidateStatusConfig: AxiosRequestConfig = {
  validateStatus: null
};

const undefinedValidateStatusConfig: AxiosRequestConfig = {
  validateStatus: undefined
};
const handleResponse = (response: AxiosResponse) => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    console.log(error.message);
  }
};
axios(config)
  .then(handleResponse)
  .catch(handleError);

axios.get('/movie?api_key=e7d1a25f4b340e09aa16db0f949d2a5e')
  .then(handleResponse)
  .catch(handleError);
axios.get('/movie', { params: { api_key: e7d1a25f4b340e09aa16db0f949d2a5e } })
  .then(handleResponse)
  .catch(handleError);