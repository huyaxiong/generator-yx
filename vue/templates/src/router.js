import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/home', component: Home, meta: {
            title: '主页',
            keepAlive: true
        }
    },
    {
        path: '*', redirect: '/home'
    }
];

let router = new VueRouter({routes});

router.beforeEach((to, from, next) => {

    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
    next();
});

export default router;