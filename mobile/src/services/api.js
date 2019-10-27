import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.5.248:3333',
});

export default api;
