import axios from 'axios';
import type { AxiosInstance } from 'axios';
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const request:AxiosInstance = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
request.interceptors.request.use( (config) => {
    // 在发送请求之前做些什么
    return config;
  },  (error)=>{
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use( (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export default request