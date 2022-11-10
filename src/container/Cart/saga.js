import {
  all,
  takeEvery,
  takeLatest,
  put,
  call,
  delay,
} from "redux-saga/effects";
import {
  getListProductCartSuccess,
  getListProductCartFailed,
  deleteProductCartSuccess,
  deleteProductCartFailed,
  putProductCartSuccess,
  putProductCartFailed,
  getListProductSuccess,
  getListProductFailed
} from "./actions";
import {
  GET_LIST_PRODUCT_CART_REQUEST,
  DELETE_PRODUCT_CART_REQUEST,
  PUT_PRODUCT_CART_REQUEST,
  GET_LIST_PRODUCT_REQUEST
} from "./contants";
import {
  getListProductCartApi,
  deleteProductCartApi,
  putProductCartApi,
  getListProductApi
} from "./service";
function* getListProductCartProcess(params) {
  try {
    const respon  = yield call(getListProductCartApi);
    if(respon.status === 200 || respon.status === 201) {
      yield put(getListProductCartSuccess(respon.data))
    }else {
      yield put(getListProductCartFailed())
    }
  } catch (err) {
    yield put(getListProductCartFailed())
  }
}
function* watchGetListProductCart() {
  yield takeEvery(GET_LIST_PRODUCT_CART_REQUEST, getListProductCartProcess);
}

function* deleteProductCartProcess(params) {
  try {
    const {data} = params;
    const respon = yield call(deleteProductCartApi, data);
    if(respon.status === 200 || respon.status === 201) {
      yield put(deleteProductCartSuccess(respon.data))
    }else {
      yield put(deleteProductCartFailed())
    }
  }catch (err) {
    yield put(deleteProductCartFailed())
  }
}
function* watchDeleteProductCart() {
  yield takeLatest(DELETE_PRODUCT_CART_REQUEST, deleteProductCartProcess)
}

function* putProductCartProcess(params) {
  try {
    const {data} = params
    const {
      id,
      quantity,
      price
    } = data;
    const respon = yield call(putProductCartApi, id,
      {quantity: quantity, price: price}
      );
  }catch (err) {}
}
function* watchProductCart() {
  yield takeLatest(PUT_PRODUCT_CART_REQUEST, putProductCartProcess)
}
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
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess)
}


function* watchAll() {
  yield all([
    watchGetListProductCart(),
    watchDeleteProductCart(),
    watchProductCart(),
    watchGetListProduct()
  ])
}
export default watchAll;