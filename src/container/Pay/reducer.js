import {
     GET_PRODUCT_IN_PAYMENT_REQUEST,
     GET_PRODUCT_IN_PAYMENT_SUCCESS,
     GET_PRODUCT_IN_PAYMENT_FAILED,
     DELETE_PRODUCT_IN_PAYMENT_REQUEST,
     DELETE_PRODUCT_IN_PAYMENT_SUCCESS,
     DELETE_PRODUCT_IN_PAYMENT_FAILED
} from "./contants";
const initialState = {
     products: [],
     isLoading: true,
     error: []
}
const PaymentReducer = (state = initialState, action) => {
     switch(action.type) {
          case GET_PRODUCT_IN_PAYMENT_REQUEST:
               return {
                    ...state,
                    isLoading: true
               }
               case GET_PRODUCT_IN_PAYMENT_SUCCESS:
               return {
                    ...state,
                    products: action.data,
                    isLoading: false
               }
               case GET_PRODUCT_IN_PAYMENT_FAILED :
               return state;
               case DELETE_PRODUCT_IN_PAYMENT_REQUEST:
               return {
                    ...state,
                    isLoading: true
               }
               case DELETE_PRODUCT_IN_PAYMENT_SUCCESS:

               const newData = state.products.filter(item => item.id !== action.data.id)

               return {
                    ...state,
                    products: newData,
                    isLoading: false
               }
               case DELETE_PRODUCT_IN_PAYMENT_FAILED:
               return state;
               default:
                    return state;
     }
}
export default PaymentReducer;