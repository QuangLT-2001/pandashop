import axios from "axios";
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getProductInPaymentApi = () => {
     return axios.get(`${BASE_URL}/Payment`);
}
export const deleteProductInPaymentApi = productId => {
     return axios.delete(`${BASE_URL}/Payment/${productId}`)
}