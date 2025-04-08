import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getProducts = () => API.get('/products');
export const createProduct = (data) => API.post('/products', data);

// Add more later: createProduct, updateProduct, etc.
