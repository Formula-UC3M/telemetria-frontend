import {
  LOGIN_SUCCESS
} from './action';

const mutations = {
  [LOGIN_SUCCESS] (state, { token }) {
    state.token = token;
  }
};

export default mutations