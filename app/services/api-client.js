import axios from 'axios';
import { API_URL } from '../variables/app-config';

const options = {
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
};

class ApiClient {
  client = {};

  constructor() {
    this.client = axios.create(options);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(res => Promise.resolve(res))
      .catch(error => {
        throw error;
      });
  }

  post(url, data = {}, conf = {}) {
    return this.client.post(url, data, conf).then(res =>
      Promise.resolve(res).catch(error => {
        throw error;
      }),
    );
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(res => Promise.resolve(res))
      .catch(error => {
        throw error;
      });
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(res => Promise.resolve(res))
      .then(error => {
        throw error;
      });
  }
}

const apiClient = new ApiClient();

export default apiClient;
