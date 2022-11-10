import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from "./constants";
export const getProducts = () => {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

export const getProductsSuccess = data => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data: data
    }
}
export const getProductsFailed = data => {
    return {
        type: GET_PRODUCTS_FAILED,
        data
    }
}