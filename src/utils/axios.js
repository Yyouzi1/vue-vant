import axios from 'axios'
import store from '../store'
import loading from '../common/loading/index'
// create an axios instance
const baseURL = process.env.NODE_ENV === 'development' ? 'http://ip-api.com/json/' : 'http://test.ip-api.com/json/'
const service = axios.create({
    baseURL: baseURL, // url = base url + request url    
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        loading.show()

        if (store.getters.token) {
            config.headers['token'] = store.getters.token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        console.log('-----结果返回');
        loading.hide()
        const res = response.data
        if (res.code != 200) {
            // ...
        } else {
            return res
        }
    },
    error => {
        console.log('-----返回异常');
        loading.hide()
        console.log(error);
        return Promise.reject(error)
    }
)

export default service