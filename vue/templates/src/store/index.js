import Vuex from 'vuex'
import Vue from 'vue'
import userType from './user.type'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userList: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    [userType.USER_QUERY] ({ commit }, payload) {
      commit(userType.USER_QUERY, payload)
    }
  }
})

export default store
