import axios from 'axios';
import { isAuthenticated } from '../../components/Routes/permissionChecker';
import { API_CONFIG } from './config';

const axioInstant = axios.create(API_CONFIG);

axioInstant.interceptors.request.use(
  config => {
    if (isAuthenticated()) {
      config.headers['Authorization'] = 'Bearer ' + isAuthenticated();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axioInstant.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const commonServices = {
  get(url, params) {
    return axioInstant.request({
      method: 'GET',
      url,
      params,
    });
  },

  post(url, params) {
    return axioInstant.request({
      method: 'POST',
      url,
      params,
    });
  },

  put(url, params) {
    return axioInstant.request({
      method: 'PUT',
      url,
      params,
    });
  },

  delete(url, params) {
    return axioInstant.request({
      method: 'DELETE',
      url,
      params,
    });
  },

  options(url, params) {
    return axioInstant.request({
      method: 'OPTIONS',
      url,
      params,
    });
  },
};

export { commonServices };
