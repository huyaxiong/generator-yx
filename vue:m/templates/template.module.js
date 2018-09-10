import <%= name %>Type from './<%= name %>.type'

const <%= name %>Module = {
  state: {<%= name %>List: []},
  getters: {
    [<%= name %>Type.<%= upperName %>_QUERY] (state) {
    }
  },
  mutations: {
    [<%= name %>Type.<%= upperName %>_CREATE] (state, payload) {
      state.<%= name %>List = payload;
    }
  },
  actions: {
    [<%= name %>Type.<%= upperName %>_CREATE] ({commit}, payload) {
      commit(<%= name %>Type.<%= upperName %>_CREATE, payload);
    }
  }
};

export default <%= name %>Module;