import axious from 'axios';
const BASE_URL = "https://61b2b99ac8d4640017aaf4af.mockapi.io/api";
export const getProductDetailApi = productId => {
  return axious.get(`${BASE_URL}/Products/${productId}`);
}
export const getListProductApi = () => {
  return axious.get(`${BASE_URL}/Products`);
}
export const postProductToCartApi = (product) => {
  return axious.post(`${BASE_URL}/cart`, product);
}
export const putProductCartIdApi = (productId, product) => {
  return axious.put(`${BASE_URL}/cart/${productId}`, product)
}
export const getProductCartApi = () => {
  return axious.get(`${BASE_URL}/cart`);
}
export const postProductToPaymentApi = product => {
  return axious.post(`${BASE_URL}/Payment`, product);
}