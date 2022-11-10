import {
  call,
  takeEvery,
  takeLatest,
  all,
  delay,
  fork,
  put
} from 'redux-saga/effects';
import {
  getListProductSuccess,
  getListProductFailed,
  getListPostSuccess,
  getListPostFailed
} from './actions'
import { GET_LIST_PRODUCT_REQUEST, GET_LIST_POST_REQUEST } from './constants';
import { getListProductApi, getListPostApi} from './service'
function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi);
    if (respon.status === 200) {
      yield put(getListProductSuccess(respon.data));
      // dispatch action to reducer
    }else {
      yield put(getListProductFailed())
    }
  } catch (err) {
    yield put(getListProductFailed());
  }
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess)
}
function* getListPostProcess(params) {
  try {
    const respon =  yield call(getListPostApi);
    if(respon.status === 200) {
      yield put(getListPostSuccess(respon.data))
    }
  }catch (err) {}
}
function* watchGetListPost() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListPostProcess)
}
function* watchAll() {
  yield all([
    watchGetListProduct(),
    watchGetListPost()
  ]);
}
export default watchAll;