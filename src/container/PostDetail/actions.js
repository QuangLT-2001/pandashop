import {
  GET_POST_DETAIL_REQUEST,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_DETAIL_FAILED,
  GET_LIST_POST_REQUEST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_FAILED
} from "./contants"
export const getPostDetailRequest = data => {
  return {
    type: GET_POST_DETAIL_REQUEST,
    data: data
  }
}
export const getPostDetailSuccess = data => {
  return {
    type: GET_POST_DETAIL_SUCCESS,
    data: data
  }
}
export const getPostDetailFailed = data => {
  return {
    type: GET_POST_DETAIL_FAILED,
    data: data
  }
}
export const getListPostRequest = () => {
  return {
    type: GET_LIST_POST_REQUEST
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