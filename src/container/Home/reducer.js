import {
    GET_LIST_PRODUCT_REQUEST,
    GET_LIST_PRODUCT_SUCCESS,
    GET_LIST_PRODUCT_FAILED,
    GET_LIST_POST_REQUEST,
    GET_LIST_POST_SUCCESS,
    GET_LIST_POST_FAILED
} from "./constants";
export const initialState = {
    products: [],
    isLoading: true,
    error: [],
    posts: []
}
const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUCT_REQUEST: {

            return {
                ...state,
                isLoading: true
            }
        }
        case GET_LIST_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: action.data,
                isLoading: state.products.length && state.posts.length ? false : true,
            }
        }
        case GET_LIST_POST_SUCCESS: {
            return {
                ...state,
                posts: action.data,
                isLoading: state.products.length && state.posts.length ? false : true,
            }
        }
        case GET_LIST_PRODUCT_FAILED: {
            return state
        }
        case GET_LIST_POST_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case GET_LIST_POST_FAILED: {
            return state
        }
        default:
            return state;
    }
}
export default HomeReducer;