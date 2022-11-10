import {
  call,
  takeEvery,
  takeLatest,
  all,
  delay,
  fork,
  put
} from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailed } from './actions';
import { GET_PRODUCTS_REQUEST } from './constants';
import { getProductsApi } from './service'
function* getProductsProcess(params) {
  try {
    const respon = yield call(getProductsApi);
    if (respon.status === 200) {
      yield put(getProductsSuccess(respon.data));
      // dispatch action to reducer
    }else {
      yield put(getProductsFailed())
    }
  } catch (err) {
    yield put(getProductsFailed());
  }
}
function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsProcess)
}
function* watchProductsAll() {
  yield all([watchGetProducts()]);
  console.log('call saga');
}
export default watchProductsAll;