import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './views/user.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/user', component: User, meta: {
            keepAlive: true
        }
    }
];

let router = new VueRouter({routes});

export default router;