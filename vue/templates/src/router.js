import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './components/user.vue';
import UserDetail from './components/user-detail.vue';
import UserList from './components/user-list.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/user', component: User,
        children: [
            {path: ':id', name: 'user-detail', component: UserDetail},
            {path: '', name:'user-list', component: UserList}
        ]
    }
];

let router = new VueRouter({routes});

export default router;