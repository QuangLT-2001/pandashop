import {
     GET_PRODUCT_IN_PAYMENT_REQUEST,
     GET_PRODUCT_IN_PAYMENT_SUCCESS,
     GET_PRODUCT_IN_PAYMENT_FAILED,
     DELETE_PRODUCT_IN_PAYMENT_REQUEST,
     DELETE_PRODUCT_IN_PAYMENT_SUCCESS,
     DELETE_PRODUCT_IN_PAYMENT_FAILED
} from "./contants";
export const getProductInPaymentRequest = () => {
     return {
          type: GET_PRODUCT_IN_PAYMENT_REQUEST
     }
}
export const getProductInPaymentSuccess = data => {
     return {
          type: GET_PRODUCT_IN_PAYMENT_SUCCESS,
          data: data
     }
}
export const getProductInPaymentFailed = data => {
     return {
          type: GET_PRODUCT_IN_PAYMENT_FAILED ,
          data: data
     }
}
export const deleteProductInPaymentRequest = (data) => {
     return {
          type: DELETE_PRODUCT_IN_PAYMENT_REQUEST,
          data: data
     }
}
export const deleteProductInPaymentSuccess = data => {
     return {
          type: DELETE_PRODUCT_IN_PAYMENT_SUCCESS,
          data: data
     }
}
export const deleteProductInPaymentFailed = data => {
     return {
          type: DELETE_PRODUCT_IN_PAYMENT_FAILED ,
          data: data
     }
}

