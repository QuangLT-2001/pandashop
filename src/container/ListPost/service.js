import axios from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getPostIdApi = postId => {
  return axios.get(`${BASE_URL}/News/${postId}`);
}
export const createPostApi = post => {
  return axios.post(`${BASE_URL}/News`, post);
}
export const getListPostByPageApi = (page, limit) => {
  return axios.get(`${BASE_URL}/News`);
}