import {
  GET_LIST_PRODUCT_CART_REQUEST,
  GET_LIST_PRODUCT_CART_FAILED,
  GET_LIST_PRODUCT_CART_SUCCESS,
  DELETE_PRODUCT_CART_REQUEST,
  DELETE_PRODUCT_CART_SUCCESS,
  DELETE_PRODUCT_CART_FAILED,
  PUT_PRODUCT_CART_REQUEST,
  PUT_PRODUCT_CART_SUCCESS,
  PUT_PRODUCT_CART_FAILED,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED,
} from "./contants"
export const getListProductCartRequest = () => {
  return {
    type: GET_LIST_PRODUCT_CART_REQUEST,
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
export const deleteProductCartRequest = data => {
  return {
    type: DELETE_PRODUCT_CART_REQUEST,
    data: data
  }
}
export const deleteProductCartSuccess = data => {
  return {
    type: DELETE_PRODUCT_CART_SUCCESS,
    data: data
  }
}
export const deleteProductCartFailed = data => {
  return {
    type: DELETE_PRODUCT_CART_FAILED,
    data: data
  }
}
export const putProductCartRequest = data => {
  return {
    type: PUT_PRODUCT_CART_REQUEST,
    data: data
  }
}
export const putProductCartSuccess = data => {
  return {
    type: PUT_PRODUCT_CART_SUCCESS,
    data: data
  }
}
export const putProductCartFailed = data => {
  return {
    type: PUT_PRODUCT_CART_FAILED,
    data: data
  }

}
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