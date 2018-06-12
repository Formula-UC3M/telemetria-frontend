import api from '../../api/index';

export const FETCH = '@@config/FETCH';
export const FETCH_DOING = '@@config/FETCH_DOING';
export const FETCH_DONE = '@@config/FETCH_DONE';
export const FETCH_FAILED = '@@config/FETCH_FAILED';

const fetchConfig = ({ commit }) => {
  api.ranges.getRanges()
    .then(res => commit(FETCH_DONE, res.data))
    .catch(err => commit(FETCH_FAILED, err));
}

export default {
  fetchConfig
};
