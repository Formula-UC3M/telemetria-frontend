import axios from 'axios';
import {
  API_URL
 } from './index';

function getRanges() {
  return axios.get(`${API_URL}/api/ranges`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export default {
  getRanges
}
