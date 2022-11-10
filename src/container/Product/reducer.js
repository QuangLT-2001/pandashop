import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED
} from "./constants";
export const initialState = {
    products: [],
    isLoading: true,
    error: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.data,
                isLoading: false,
            }
        }
        case GET_PRODUCTS_FAILED: {
            return state
        }
        default:
            return state;
    }
}
export default productReducer;