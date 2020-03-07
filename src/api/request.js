import axios from 'axios'
import { Notify } from 'vant'
import router from '../router';

// const BASE_URL = process.env.VUE_APP_BASE_API
// 过滤请求
axios.interceptors.request.use(config => {
    config.timeout = 100000
    let token = localStorage.getItem('tt-token')
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (token) {
        config.headers['X-Shop-Token'] = `${token}`
    } else {
        if (config.url.indexOf('sendCaptcha') < 0 && config.url.indexOf('loginByCaptcha') < 0) {
            router.push({ path: '/login' })
        }
    }
    return config
}, error => {
    Notify('网络异常')
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errno == 0 || response.data.code == 0) {
            return Promise.resolve(response.data)
        } else {
            Notify(response.data.msg)
            return Promise.reject(response.data)
        }
    },
    error => Promise.reject(error)
)

export default function request(method, url, data) {
    method = method.toLocaleLowerCase()
    if (method === 'get') {
        return axios.get(url, {
            params: data
        })
    }
    return axios({
        method,
        url,
        data
    })
}
