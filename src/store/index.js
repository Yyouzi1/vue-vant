import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

const myPlugin = store => {
    // 当 store 初始化后调用
    const list = JSON.parse(localStorage.getItem('list'))
    const isAlive = sessionStorage.getItem('isAlive')
    if (isAlive && list && list.length > 0) {
        store.state.list = list
    }
    store.subscribe((mutation, state) => {

    })
}

const store = new Vuex.Store({
    plugins: [myPlugin],
    state: {
        list: []
    },
    getters: {
        token() {
            return '123'
        }
    },
    mutations: {
        ADD(state, params) {
            state.list.push(params)
            localStorage.setItem('list', JSON.stringify(state.list))
            sessionStorage.setItem('isAlive', true)
        },
        CLEAR(state, params) {
            state.list = []
            localStorage.removeItem('list')
            sessionStorage.removeItem('isAlive')
        }
    },
    actions: {
        add({ state, commit }, params) {
            commit('ADD', params)
        },
        clear({ state, commit }, params) {
            if (!params) {
                commit('CLEAR')
            }
        }
    }

})

export default store