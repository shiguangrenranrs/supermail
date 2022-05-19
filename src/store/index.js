import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations,
  actions,
  getters,
});

export default store;