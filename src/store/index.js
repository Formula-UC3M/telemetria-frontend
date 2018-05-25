import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth/index';
import config from './config/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    config
  }
});
