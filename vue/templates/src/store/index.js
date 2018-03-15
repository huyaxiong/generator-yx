import Vuex from 'vuex';
import Vue from 'vue';
import {init} from "../common/config";
import userType from "./user.type";
import axios from "axios";


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {userList: []},
    getters: {
        [userType.USER_QUERY](state) {
        }
    },
    mutations: {
        [userType.USER_QUERY](state, payload) {

            state.userList = payload;
        }
    },
    actions: {
        [userType.USER_QUERY]({commit}, payload) {

            commit(userType.USER_QUERY, payload);
        }
    }
});

export default store;