import axios from 'axios';

export default axios.create({
  baseURL: 'https://6425405d7ac292e3cffb470a.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
