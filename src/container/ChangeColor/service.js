import axios from "axios";
const BASE_URL = "https://61c7b39990318500175474a1.mockapi.io/api";
export const getColorApi = () => {
     return axios.get(`${BASE_URL}/Color`)
}
export const putColorIdApi = color => {
     return axios.put(`${BASE_URL}/Color/1`, color);
}