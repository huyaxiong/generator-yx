import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './components/user.vue';
import UserList from './components/user-list.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/user', component: User,
        children: [
            {
                path: '',
                name: 'user-list',
                component: UserList,
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
];

let router = new VueRouter({routes});

export default router;