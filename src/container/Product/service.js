import axios from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getProductsApi = () => {
  return axios.get(`${BASE_URL}/Products`);
}
export const getProductsIdApi = productId => {
  return axios.get(`${BASE_URL}/Products/${productId}`);
}
export const createProductsApi = product => {
  return axios.post(`${BASE_URL}/Products`, product);
}