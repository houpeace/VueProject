import axios from 'axios'
import qs from 'qs'
import store from './../store'
import { Message } from 'element-ui'

const service = axios.create({
  timeout: 10000,                  // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 

//请求拦截
service.interceptors.request.use((config) => {
    store.commit(STORE_TYPE.IS_LOADING,true);
    //在发送请求之前做某件事
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     console.log("错误的传参", 'fail');
    return Promise.reject(error);
});
//返回拦截
service.interceptors.response.use((res) =>{
    store.commit(STORE_TYPE.IS_LOADING,false);
    //对响应数据做些事
    if(res.data.code==0){
         Message({
          message: res.data.msg,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    store.commit(STORE_TYPE.IS_LOADING,false);
    console.log("网络异常", 'fail');
    return Promise.reject(error);
});

export default service