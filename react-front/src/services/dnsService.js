// src/services/dnsService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const fetchDNSStats = async () => {
  const response = await apiClient.get('/stats/dns');
  return response.data;
};

export const sendConfig = async (config) => {
  const response = await apiClient.post('/config', config, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};