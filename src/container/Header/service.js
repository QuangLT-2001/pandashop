import axios from "axios";
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getListProductApi = () => {
  return axios.get(`${BASE_URL}/Products`);
}
export const getListProductCartApi = () => {
  return axios.get(`${BASE_URL}/cart`)
}