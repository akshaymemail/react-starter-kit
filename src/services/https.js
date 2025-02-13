/**
 * src/api/http.js
 */
import axios from "axios";
import qs from "qs";
import store from "../redux/store";
import { logOutAction } from "../redux/auth/actions";

/**
 *
 * parse error response
 */
function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages });
    } else {
      return Promise.reject({ messages: [messages] });
    }
  } else {
    return Promise.reject({ messages: ["Something went wrong!"] });
  }
}

/**
 * parse response
 */
function parseBody(response) {
  // Check if the status code is 200.
  if (response.status === 200) {
    return response.data; // If so, return the response data.
  } else if (response.status >= 500) {
    // if the status is 5xx do not show message from backend that may cause html content, provide your own message
    return parseError("Internal Server Error");
  } else {
    // If the status code is not 200, call `parseError()` with the response's error messages.
    return parseError(response.data.messages);
  }
}

/**
 * axios instance
 */
let https = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false });
  },
});

// request header
https.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // const apiToken = sessionStorage.getItem('token')
    // config.headers = { 'Custom-Header-IF-Exist': apiToken }
    config.headers = {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("access-token")
      )}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response parse
https.interceptors.response.use(
  (response) => {
    return parseBody(response);
  },
  (error) => {
    console.warn("Error status", error.response.status);
    // return Promise.reject(error)
    if (error.response.status === 401) {
      localStorage.clear();
      store.dispatch(logOutAction());
      return;
    }
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

export default https;
