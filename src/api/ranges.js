import axios from 'axios';
import {
  API_URL
 } from './index';

function getRanges() {
  return axios.get(`${API_URL}/api/ranges`, {
    headers: {
      'Authentication': `Berarer ${localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export default {
  getRanges
}
