/*

import axios from 'axios'
let $http = axios.create()
$http.defaults.baseURL = process.env.API //在congif  dev.env.js  prod.env.js 中设置的
//请求拦截
$http.interceptors.request.use(
    config => {
        console.log(config)
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)
//响应拦截
$http.interceptors.response.use(
    response => {
        if (response.data.errcode == 40023) {
            localStorage.clear()
            this.$router.path('/login')
        } else if (response.data.errcode == 404) {
            console.log("进入错误页面")
            //当前还是登陆状态
        } else {
            return response
        }
    }
)

//统一接口请求封装
function fetch(method = 'get', url, params) {
    const env  = process.env.NODE_ENV === 'production'? 0:1
    return new Promise((resolve, reject) => {
        $http(
            {
                url: env===1?url:url.replace(/\/api/,""),
                method: method,
                data: params
            }
        ).then(res => {
            console.log(res)
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
export default fetch


*/