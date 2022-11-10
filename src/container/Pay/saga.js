import {
  call,
  takeEvery,
  takeLatest,
  all,
  put,
  delay,
  fork
} from 'redux-saga/effects';
import {
  getProductInPaymentSuccess,
  getProductInPaymentFailed,
  deleteProductInPaymentSuccess,
  deleteProductInPaymentFailed
} from "./actions"
import {
  GET_PRODUCT_IN_PAYMENT_REQUEST,
  DELETE_PRODUCT_IN_PAYMENT_REQUEST
} from "./contants"
import {
  getProductInPaymentApi,
  deleteProductInPaymentApi
} from "./service"
function* getProductInPaymentProcess(params) {
  try {
    const respon = yield call(getProductInPaymentApi);
    if(respon.status === 201 || respon.status === 200) {
      yield put(getProductInPaymentSuccess(respon.data))
    }else {
      yield put(getProductInPaymentFailed())
    }
  }catch (err) {
    yield put(getProductInPaymentFailed())
  }
}
function* watchGetProductInPayment() {
  yield takeLatest(GET_PRODUCT_IN_PAYMENT_REQUEST, getProductInPaymentProcess)
}
function* deleteProductInPaymentProcess(params) {
  try {
    const {data}  = params;
    const respon = yield call(deleteProductInPaymentApi, data);
    if(respon.status === 201 || respon.status === 200) {
      yield put(deleteProductInPaymentSuccess(respon.data))
    }else {
      yield put(deleteProductInPaymentFailed())
    }
  } catch (err) {yield put(deleteProductInPaymentFailed())}
}
function* watchDeleteProductInPayment() {
  yield takeLatest(DELETE_PRODUCT_IN_PAYMENT_REQUEST, deleteProductInPaymentProcess)
}
function* watchAll() {
  yield all([
    watchGetProductInPayment(),
    watchDeleteProductInPayment()
  ])
}
export default watchAll;