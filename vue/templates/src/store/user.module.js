import * as type from './user.type'


const userModule = {

    state: {userList: []},

    getters: {
        [type.USER_QUERY] (state) {
        }
    },

    mutations: {
        [type.USER_QUERY] (state, payload) {
            state.userList = payload;
        }
    },

    actions: {
        [type.USER_QUERY] (context, payload) {

            context.commit(type.USER_QUERY, payload);
            console.log(context);
        }
    }
};

export default userModule;