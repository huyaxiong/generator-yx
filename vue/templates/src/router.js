import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './component/user.vue';
import UserDetail from './component/user-detail.vue';
import UserList from './component/user-list.vue';


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