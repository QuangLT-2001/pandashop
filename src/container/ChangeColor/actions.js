import {
     GET_COLOR_REQUEST,
     GET_COLOR_SUCCESS,
     GET_COLOR_FAILED,
     PUT_COLOR_REQUEST,
     PUT_COLOR_SUCCESS,
     PUT_COLOR_FAILED
} from "./contants";
export const getColorRequest = () => {
     return {
          type: GET_COLOR_REQUEST
     }
}
export const getColorSuccess = data =>  {
     return {
          type: GET_COLOR_SUCCESS,
          data: data
     }
}
export const getColorFailed = data => {
     return {
          type: GET_COLOR_FAILED,
          data: data
     }
}
export const putColorRequest = data => {
     return {
          type: PUT_COLOR_REQUEST,
          data: data
     }
}
export const putColorSuccess = data => {
     return {
          type: PUT_COLOR_SUCCESS,
          data: data
     }
}
export const putColorFailed = data => {
     return {
          type: PUT_COLOR_FAILED,
          data: data
     }
}