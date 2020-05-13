import axios from 'axios'


//究极方案 Promise
export function request(config) {


    //  1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/n3',
        timeout: 5000
    })


    //2.axios的拦截器
    // axios.interceptors  全局拦截
    //2.1请求拦截的作用
    instance.interceptors.request.use(config => { //拦截请求
        return config //不返回，main.js拿不到config，会打印err
    }, err => {
        // console.log(err);

    });
    //2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err); ////说明是一次失败的拦截，在这里是服务器ip错了

    })



    //3.发送真正的网络请求
    return instance(config)


}