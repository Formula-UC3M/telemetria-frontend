import {
  FETCH_DONE,
  FETCH_FAILED,
  FETCH
} from './action';

const mutations = {
  [FETCH_DONE] (state, { payload }) {
    console.log(state);
    const {
      created_at,
      __v,
      _id,
      version,
      ...result
    } = payload;

    state.config = result;
  },
  [FETCH_FAILED] (state){}
};

export default mutations