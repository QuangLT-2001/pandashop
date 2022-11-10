import {
     all,
     takeLatest,
     takeEvery,
     call,
     delay,
     put
} from "redux-saga/effects";

import {
     getColorSuccess,
     getColorFailed,
     putColorSuccess,
     putColorFailed
} from "./actions";
import {
     GET_COLOR_REQUEST,
     PUT_COLOR_REQUEST
} from "./contants";
import {
     getColorApi,
     putColorIdApi
} from "./service";

function* getColorProcess(params) {
     try {
          const respon = yield call(getColorApi);
          if(respon.status === 200 || respon.status === 201) {
               yield put(getColorSuccess(respon.data))
          }else {
               yield put(getColorFailed());
          }

     }catch (err) {
          yield put(getColorFailed());
     }
}
function* watchGetColor() {
     yield takeLatest(GET_COLOR_REQUEST, getColorProcess)
}
function* putColorProcess(params) {
     try {
          const respon = yield call(putColorIdApi, params.data);
          if(respon.status === 200 || respon.status === 201) {
               yield put(putColorSuccess(respon.data))
          }else {
               yield put(putColorFailed())
          }
     }catch (err) {
          yield put(putColorFailed())
     }
}
function* watchPutColor() {
     yield takeLatest(PUT_COLOR_REQUEST, putColorProcess)
}
function* watchAll() {
     yield all([
          watchGetColor(),
          watchPutColor()
     ])
}
export default watchAll;