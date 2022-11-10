import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  HANDLE_DECREMENT,
  HANDLE_INCREMENT,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED,
  POST_PRODUCT_TO_CART_REQUEST,
  POST_PRODUCT_TO_CART_SUCCESS,
  POST_PRODUCT_TO_CART_FAILED,
  POST_PRODUCT_TO_CART,
  HANDLE_CLICK_CLOSE_MESSAGE,
  POST_PRODUCT_TO_PAYMENT_SUCCESS,
  POST_PRODUCT_TO_PAYMENT_FAILED,
  POST_PRODUCT_TO_PAYMENT_REQUEST
} from "./contants";
export const getProductDetailRequest = data => {
  return {
    type: GET_PRODUCT_DETAIL_REQUEST,
    data: data
  }
}
export const getProductDetailSuccess = data => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    data: data
  }
}
export const getProductDetailFailed = data => {
  return {
    type: GET_PRODUCT_DETAIL_FAILED,
    data: data
  }
}
export const handleIncrement = () => {
  return {
    type: HANDLE_INCREMENT
  }
}
export const handleDecrement = () => {
  return {
    type: HANDLE_DECREMENT
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
export const postProductToCartRequest = data => {
  return {
    type: POST_PRODUCT_TO_CART_REQUEST,
    data: data
  }
}
export const postProductToCartSuccess = data => {
  return {
    type: POST_PRODUCT_TO_CART_SUCCESS,
    data: data
  }
}
export const postProductToCartFailed = data => {
  return {
    type: POST_PRODUCT_TO_CART_FAILED,
    data: data
  }
}
export const postProductToCart = data => {
  return {
    type: POST_PRODUCT_TO_CART,
    data: data
  }
}
export const handleClickCloseMessage = () => {
  return {
    type: HANDLE_CLICK_CLOSE_MESSAGE
  }
}
export const postProductToPaymentRequest = data => {
  return {
    type: POST_PRODUCT_TO_PAYMENT_REQUEST,
    data: data
  }
}
export const postProductToPaymentSuccess = data => {
  return {
    type: POST_PRODUCT_TO_PAYMENT_SUCCESS,
    data: data
  }
}
export const postProductToPaymentFailed = data => {
  return {
    type: POST_PRODUCT_TO_PAYMENT_FAILED,
    data: data
  }
}