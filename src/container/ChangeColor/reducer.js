import {
     GET_COLOR_REQUEST,
     GET_COLOR_SUCCESS,
     GET_COLOR_FAILED,
     PUT_COLOR_REQUEST,
     PUT_COLOR_SUCCESS,
     PUT_COLOR_FAILED
} from "./contants";
const initialState = {
     color: {}
}
const ColorReducer = (state = initialState, action ) => {
     switch(action.type) {
          case GET_COLOR_REQUEST:
               return state;
          case GET_COLOR_SUCCESS:
               return {
                    ...state,
                    color: action.data[0]
               };
          case GET_COLOR_FAILED:
               return state;
          case PUT_COLOR_REQUEST:
               return state;
          case PUT_COLOR_SUCCESS:
               return {
                    ...state,
                    color: action.data
               }
          case PUT_COLOR_FAILED:
               return state;
          default:
               return state;
     }
}
export default ColorReducer;