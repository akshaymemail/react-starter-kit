import https from './https'

class Services {
  static get = (endpoint, params) => {
    return new Promise((resolve, reject) => {
      https
        .get(endpoint, { params })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  static post = (endpoint, payload) => {
    return new Promise((resolve, reject) => {
      https
        .post(endpoint, payload)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  static put = (endpoint, replaceResource) => {
    return new Promise((resolve, reject) => {
      https
        .put(endpoint, replaceResource)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  static patch = (endpoint, updateResource) => {
    return new Promise((resolve, reject) => {
      https
        .patch(endpoint, updateResource)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  static delete = (endpoint, toBeDelete) => {
    return new Promise((resolve, reject) => {
      https
        .delete(endpoint, toBeDelete)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
}

export default Services
