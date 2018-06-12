import axios from 'axios';
import {
  API_URL
} from './index';

function login(email, password) {
  return axios.post(`${API_URL}/users/login`, {
    email,
    password
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export default {
  login
}
