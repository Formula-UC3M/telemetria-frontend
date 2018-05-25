import {
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './action';

const mutations = {
  [LOGIN_SUCCESS] (state, { payload: token }) {
    state.token = token;
  },
  [LOGIN_FAILED](state) {}
};

export default mutations