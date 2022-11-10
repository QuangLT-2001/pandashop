import axios from "axios";
import {
  GET_LIST_POST_REQUEST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAILED,
  GET_POST_ID_REQUEST,
  GET_POST_ID_SUCCESS,
  GET_POST_ID_FAILED
} from "./constants";
const initialState = {
  posts: [],
  postDetail: {},
  isLoading: true,
  error: [],
  check: true
}
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.data

      }
    case GET_LIST_POST_FAILED:
      return state;

    default:
      return state;
  }
}
export default PostReducer;