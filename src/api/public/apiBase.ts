import axios from 'axios';

export const apiBase = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});
