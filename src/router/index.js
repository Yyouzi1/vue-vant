import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('../pages/index.vue'), name: 'index', meta: {
            title: 'index'
        }
    },
    {
        path: '/home', component: () => import('../pages/home.vue'), name: 'home', meta: {
            title: 'home'
        }
    },
    {
        path: '/user', component: () => import('../pages/user.vue'), name: 'user', meta: {
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