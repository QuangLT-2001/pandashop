import {
  GET_LIST_POST_REQUEST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAILED,
  GET_POST_ID_REQUEST,
  GET_POST_ID_SUCCESS,
  GET_POST_ID_FAILED
} from "./constants";
export const getListPostRequest = (data) => {
  return {
    type: GET_LIST_POST_REQUEST,
    data: data
  }
}
export const getListPostSuccess = data => {
  return {
    type: GET_LIST_POST_SUCCESS,
    data: data
  }
}
export const getListPostFailed = data => {
  return {
    type: GET_LIST_POST_FAILED,
    data: data
  }
}
export const getPostIdRequest = () => {
  return {
    type: GET_POST_ID_REQUEST
  }
}
export const getPostIdSuccess = data => {
  return {
    type: GET_POST_ID_REQUEST,
    data: data
  }
}
export const getPostIdFailed = data => {
  return {
    type: GET_POST_ID_FAILED,
    data: data
  }
}