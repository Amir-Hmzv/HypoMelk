import axios from "axios";

const BASE_URL = "https://api.hypomelk.ir";

const client = axios.create({
  baseURL: BASE_URL,
});

export default {
  get: (url, responseHandler, errorHandler) => {
    return client.get(url).then(responseHandler).catch(errorHandler);
  },
  post: (url, body, responseHandler, errorHandler) => {
    return client.post(url, body).then(responseHandler).catch(errorHandler);
  },
  put: (url, body, responseHandler, errorHandler) => {
    return client.put(url, body).then(responseHandler).catch(errorHandler);
  },
  patch: (url, body, responseHandler, errorHandler) => {
    return client.patch(url, body).then(responseHandler).catch(errorHandler);
  },
  delete: (url, responseHandler, errorHandler) => {
    return client.delete(url).then(responseHandler).catch(errorHandler);
  },
};
