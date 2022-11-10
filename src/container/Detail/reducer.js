import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  HANDLE_INCREMENT,
  HANDLE_DECREMENT,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILED,
  POST_PRODUCT_TO_CART_REQUEST,
  POST_PRODUCT_TO_CART_SUCCESS,
  POST_PRODUCT_TO_CART_FAILED,
  POST_PRODUCT_TO_CART,
  HANDLE_CLICK_CLOSE_MESSAGE,
  POST_PRODUCT_TO_PAYMENT_REQUEST,
  POST_PRODUCT_TO_PAYMENT_SUCCESS,
  POST_PRODUCT_TO_PAYMENT_FAILED
} from './contants';
const initialState = {
  detail: {},
  isLoading: true,
  error: [],
  counter: 1,
  products: [],
  check: false,
  productCart: {},
  checkPayment: false
}
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        check: false
      }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: state.products.length && Object.entries(state.detail).length ? false : true,
        detail: action.data,
        check: false
      }
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: state.products.length && state.detail ? false : true,
        products: action.data,
        check: false
      }

    case GET_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        isLoading: true,

        check: false
      };
    case HANDLE_INCREMENT:
      return {
        ...state,
        counter: state.counter < 10 ? state.counter + 1 : state.counter,
        check: false
      }
    case HANDLE_DECREMENT:
      return {
        ...state,
        counter: state.counter > 1 ? state.counter - 1 : 1,
        check: false
      }
    case GET_LIST_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        check: false
      }

    case GET_LIST_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,

        check: false
      }
    case POST_PRODUCT_TO_CART_REQUEST:
      return {
        ...state,
        check: false
      };
    case POST_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        check: true,
        productCart: action.data
      };
    case POST_PRODUCT_TO_CART_FAILED:
      return state;
    case HANDLE_CLICK_CLOSE_MESSAGE:
      return {
        ...state,
        check: false
      }
    case POST_PRODUCT_TO_PAYMENT_REQUEST: {
      return {
        ...state,
        checkPayment: false
      }
    }
    case POST_PRODUCT_TO_PAYMENT_SUCCESS: {
      return {
        ...state,
        checkPayment: setTimeout(() => {
          return false;
        }, 3000)
      }
    }
    case POST_PRODUCT_TO_PAYMENT_FAILED: {
      return state
    }
    default:
      return state;
  }
}
export default detailReducer;