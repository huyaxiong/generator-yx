import userModule from './user.module';
import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);
const store = new Vuex.Store();
store.registerModule('user', userModule);

export default store;