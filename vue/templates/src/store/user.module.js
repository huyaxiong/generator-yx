import userType from './user.type'


const userModule = {

    state: {userList: []},
    getters: {
        [userType.USER_QUERY] (state) {
        }
    },
    mutations: {
        [userType.USER_CREATE] (state, payload) {

            state.userList = payload;
        }
    },
    actions: {
        [userType.USER_CREATE] ({commit}, payload) {

            commit(userType.USER_CREATE, payload);
        }
    }
};

export default userModule;