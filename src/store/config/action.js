import api from '../../api/index';

export const FETCH = '@@config/fetch';
export const FETCH_DOING = '@@config/fetch_doing';
export const FETCH_DONE = '@@config/fetch_done';
export const FETCH_FAILED = '@@config/fetch_failed';

const fetchConfig = ({ commit }) => {
  api.ranges.getRanges()
  .then(res => {
      commit({
        type: FETCH_DONE,
        payload: res.data
      });
    })
  .catch(err => commit(FETCH_FAILED));
}

export default {
  fetchConfig
};
