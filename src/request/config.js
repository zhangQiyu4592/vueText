import axios from "axios";









const get = function (url, data) {
  return axios.get(url, data)
}
const post = function (url, data) {
  return axios.post(url, data)
}

export default {
  get, post
}