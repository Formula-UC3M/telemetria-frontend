import api from '../../api/index';

export const LOGIN = '@@auth/LOGIN';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILED = '@@auth/LOGIN_FAILED';
export const LOGOUT = '@@auth/LOGOUT';

export const TOKEN = '@@auth/TOKEN';
export const DELETE_TOKEN = '@@auth/DELETE_TOKEN';

const login = ({ commit }, { email, password }) => {
  api.auth.login(email, password)
    .then(res => {
      commit(TOKEN, res.data.token);
      commit(LOGIN_SUCCESS);
    })
    .catch(err => commit(LOGIN_FAILED, err));
}

// const token = ({ commit }) => commit(TOKEN, authToken);
const deleteToken = ({ commit }) => commit(DELETE_TOKEN);

export default {
  login,
  // token,
  deleteToken
}
