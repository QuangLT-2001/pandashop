import axios from "axios";
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getListProductCartApi = () => {
  return axios.get(`${BASE_URL}/cart`);
}

export const deleteProductCartApi = productId => {
  return axios.delete(`${BASE_URL}/cart/${productId}`)
}
export const putProductCartApi = (productId, product) => {
  return axios.put(`${BASE_URL}/cart/${productId}`, product);
}
export const getListProductApi = () => {
  return axios.get(`${BASE_URL}/Products`)
}