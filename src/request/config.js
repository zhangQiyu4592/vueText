import axios from "axios";
import router from '../router'
import { Message } from 'element-ui'

// 请求拦截、
axios.interceptors.request.use((request) => {
  if (!request.body) request.body = {};
  request.headers["token"] = localStorage.getItem("token");
  request.headers["Content-Type"] = "application/json;charset=UTF-8";
  request.timeout = 120000;
  if (process.env.NODE_ENV === "development") request.baseURL = "/api";
  // _Loading();
  return request;
})
// 返回拦截
axios.interceptors.response.use((response) => {
  if (response.data.code = '9999') {  //未登录会登录过期
    Message.error(response.data.msg)
    router.push({ name: 'Login' })
  }
  return response.data;
})


const get = function (url, data) {
  return axios.get(url, data)
}
const post = function (url, data) {
  return axios.post(url, data)
}

export {
  get, post
}