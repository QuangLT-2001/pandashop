import {
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED,
  GET_LIST_PRODUCT_CART_REQUEST,
  GET_LIST_PRODUCT_CART_SUCCESS,
  GET_LIST_PRODUCT_CART_FAILED
} from "./constants"
export const getListProductRequest = () => {
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
    data: data
  }
}
export const getListProductCartRequest = () => {
  return {
    type: GET_LIST_PRODUCT_CART_REQUEST
  }

}
export const getListProductCartSuccess = data => {
  return {
    type: GET_LIST_PRODUCT_CART_SUCCESS,
    data: data
  }

}
export const getListProductCartFailed = data => {
  return {
    type: GET_LIST_PRODUCT_CART_FAILED,
    data: data
  }

}
