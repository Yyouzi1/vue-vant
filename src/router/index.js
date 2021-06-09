import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Index from '../pages/index.vue'
import Home from '../pages/home.vue'
import User from '../pages/user.vue'

const routes = [
    {
        path: '/', component: Index, name: 'index', meta: {
            title: 'index'
        }
    },
    {
        path: '/home', component: Home, name: 'home', meta: {
            title: 'home'
        }
    },
    {
        path: '/user', component: User, name: 'user', meta: {
            title: 'user'
        }
    },
]
const router = new VueRouter({ routes })
router.beforeEach((to, from, next) => {
    const { title } = to.meta
    if (title) document.title = title
    next()
})


export default router