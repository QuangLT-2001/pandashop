import {
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED,
  GET_LIST_PRODUCT_CART_REQUEST,
  GET_LIST_PRODUCT_CART_SUCCESS,
  GET_LIST_PRODUCT_CART_FAILED
} from "./constants";
const initialState = {
  products: [],
  cart: [],
  error: [],
  isLoading: true
}
const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_LIST_PRODUCT_CART_SUCCESS:
      const data = action.data;
      console.log("data", data);
      return {
        ...state,
        cart: data
      }
    case GET_LIST_PRODUCT_CART_FAILED:
      return state
    case GET_LIST_PRODUCT_REQUEST:
      return state;
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.data
      }
    case GET_LIST_PRODUCT_FAILED:
      return state
    default:
      return state
  }
}
export default HeaderReducer;