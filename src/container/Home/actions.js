import {
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED,
    GET_LIST_POST_REQUEST,
    GET_LIST_POST_SUCCESS,
    GET_LIST_POST_FAILED
} from "./constants";
export const getListProduct = () => {
    return {
        type: GET_LIST_PRODUCT_REQUEST
    }
}

export const getListProductSuccess = data => {
    return {
        type: GET_LIST_PRODUCT_SUCCESS,
        data: data
    }
}
export const getListProductFailed = data => {
    return {
        type: GET_LIST_PRODUCT_FAILED,
        data
    }
}
export const getListPostRequest = () => {
    return {
        type: GET_LIST_POST_REQUEST
    }
}
export const getListPostSuccess = data => {
    return {
        type: GET_LIST_POST_SUCCESS,
        data: data
    }
}
export const getListPostFailed = data => {
    return {
        type: GET_LIST_POST_FAILED,
        data: data
    }
}
