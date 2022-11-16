/**
 * src/api/http.js
 */
import axios from 'axios'
import qs from 'qs'

/**
 *
 * parse error response
 */
function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages })
    } else {
      return Promise.reject({ messages: [messages] })
    }
  } else {
    return Promise.reject({ messages: ['Something went wrong!'] })
  }
}

/**
 * parse response
 */
function parseBody(response) {
  //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if (response.status === 200) {
    return response.data
  } else {
    return this.parseError(response.data.messages)
  }
}

/**
 * axios instance
 */
let https = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  },
})

// request header
https.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // const apiToken = sessionStorage.getItem('token')
    // config.headers = { 'Custom-Header-IF-Exist': apiToken }
    config.headers = {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem('access-token'),
      )}`,
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// response parse
https.interceptors.response.use(
  (response) => {
    return parseBody(response)
  },
  (error) => {
    console.warn('Error status', error.response.status)
    // return Promise.reject(error)
    if (error.response) {
      return parseError(error.response.data)
    } else {
      return Promise.reject(error)
    }
  },
)

export default https
