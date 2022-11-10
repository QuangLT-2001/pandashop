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
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_FAILED
} from "./contants"
const initialState = {
  carts: [],
  isLoading: true,
  error: [],
  products: []
}
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_LIST_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        isLoading: state.products.length ? false : true,
        carts: action.data
      };
    case GET_LIST_PRODUCT_CART_FAILED:
      return state;
    case DELETE_PRODUCT_CART_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_PRODUCT_CART_SUCCESS:
      const respon = state.carts.filter(item => item.id !== action.data.id)
      return {
        ...state,
        carts: respon,
        isLoading: false
      }
    case DELETE_PRODUCT_CART_FAILED:
      return state;
    case PUT_PRODUCT_CART_REQUEST:
      return state;
    case PUT_PRODUCT_CART_SUCCESS:
      const { data } = action;
      const productNews = state.carts.map(item => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: data.quantity
          }
        } return item;
      })
      return {
        ...state,
        carts: productNews
      }
    case PUT_PRODUCT_CART_FAILED:
      return state;
    case GET_LIST_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_LIST_PRODUCT_SUCCESS:

      return {
        ...state,
        isLoading:  state.products.length ? false : true,
        products: action.data
      };
    case GET_LIST_PRODUCT_FAILED:
      return state;
    default:
      return state
  }
}
export default CartReducer;