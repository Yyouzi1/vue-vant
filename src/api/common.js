import axios from '../utils/axios'
export function get_userinfo() {        
    return new Promise((resolve, reject) => {
        axios.get('/getUser').then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}