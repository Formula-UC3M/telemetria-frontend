import api from '../../api/index';

export const LOGIN = '@@auth/LOGIN';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILED = '@@auth/LOGIN_FAILED';
export const LOGOUT = '@@auth/LOGOUT';

const login = ({ commit }) => {
  api.auth.login('test@test.com', '1234')
    .then(res => commit(LOGIN_SUCCESS, res.data))
    .catch(err => commit(LOGIN_FAILED, err));
}

export default {
  login
}
