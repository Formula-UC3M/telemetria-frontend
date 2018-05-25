import axios from 'axios';
import {
  API_URL
 } from './index';

function getRanges() {
  return axios.get(`${API_URL}/api/ranges`, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export default {
  getRanges
}
