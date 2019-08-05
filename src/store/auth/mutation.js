import {
  TOKEN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './action';

const mutations = {
  [TOKEN] (state, token) {
    state.token = token;
    //TODO: Refactor
    localStorage.setItem('token', token);
  },
  [LOGIN_SUCCESS]() {},
  [LOGIN_FAILED]() {}
};

export default mutations