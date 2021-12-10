import axios from 'axios'
 const Axios = axios.create()
   
 Axios.interceptors.request.use(
  config => {
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);
//响应拦截器
Axios.interceptors.response.use(
  response => {
      return Promise.resolve(response); //这里返回的是data，并不是全部response
  },
  error => {
      return Promise.reject(error);
  }
);


  function post(url,data){
    return Axios.post(url,data)
  }
  function get(url,data){
    return Axios.get(url,data)
  }
export {post,get}
