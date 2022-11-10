import {
  all,
  call,
  takeEvery,
  takeLatest,
  put,
  delay,
  fork
} from "redux-saga/effects";
import {
  getListProductSuccess,
  getListProductFailed,
  getListProductCartSuccess,
  getListProductCartFailed
} from "./actions";
import {
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_CART_REQUEST
} from "./constants";
import {
  getListProductApi,
  getListProductCartApi
} from "./service";


function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi);
    if(respon.status === 200 || respon.status === 201) {
      yield put(getListProductSuccess(respon.data))
    }else {
      yield put(getListProductFailed())
    }
  }catch (err) {
    yield put(getListProductFailed())
  }
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess);
}
function* getListProductCartProcess() {
  try {
    const respon = yield call(getListProductCartApi);
    if(respon.status === 200 || respon.status === 201) {
      yield put(getListProductCartSuccess(respon.data))
    }else {
      yield put(getListProductCartFailed())
    }
  }catch (err) {
    yield put(getListProductCartFailed(err))
  }
}
function* watchGetListProductCart() {
  yield takeLatest(GET_LIST_PRODUCT_CART_REQUEST, getListProductCartProcess)
}
function* watchAll() {
  yield all([
    watchGetListProduct(),
    watchGetListProductCart()
  ])
}

export default watchAll;