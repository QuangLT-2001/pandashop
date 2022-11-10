import {
  call,
  takeLatest,
  takeEvery,
  put,
  all,
  fork,
  delay
} from "redux-saga/effects";
import {
  getProductDetailSuccess,
  getProductDetailFailed,
  getListProductSuccess,
  getListProductFailed,
  postProductToCartSuccess,
  postProductToCartFailed,
  postProductToPaymentSuccess,
  postProductToPaymentFailed
} from "./action";
import {
  getProductDetailApi,
  getListProductApi,
  postProductToCartApi,
  getProductCartApi,
  putProductCartIdApi,
  postProductToPaymentApi
} from "./service";
import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_LIST_PRODUCT_REQUEST,
  POST_PRODUCT_TO_CART_REQUEST,
  POST_PRODUCT_TO_PAYMENT_REQUEST
} from './contants';
function* getProductDetailProcess(params) {
  try {
    const { data: id, type } = params;
    const respon = yield call(getProductDetailApi, id)
    if (respon.status === 200 || respon.status===201) {
      yield put(getProductDetailSuccess(respon.data));
    } else {
      yield put(getProductDetailFailed())
    }
  } catch (err) {

    yield put(getProductDetailFailed(err))
  }
}
function* watchGetProductDetail() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, getProductDetailProcess);
}

function* getListProductProcess(params) {
  try {
    const respon = yield call(getListProductApi);
    if(respon.status === 200 || respon.status=== 201) {
      yield put(getListProductSuccess(respon.data))
    }else {
      yield put(getProductDetailFailed())
    }
  } catch (err) {
    yield put(getProductDetailFailed())
  }
}
function* watchGetListProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProductProcess);
}
function* postProductToCartProcess(params) {
  try {
    const {data: product} = params;
    const respon = yield call(postProductToCartApi, product);
    if(respon.status === 200 || respon.status === 201) {
      yield put(postProductToCartSuccess(respon.data));
    }else {
      yield put(postProductToCartFailed())
    }
  }catch (err) {
    yield put(postProductToCartFailed())
  }
}
function* watchPostProductToCart() {
  yield takeLatest(POST_PRODUCT_TO_CART_REQUEST, postProductToCartProcess)
}
function* postProductToPaymentProcess(params) {
  try {
    const {data} = params;
    const respon = yield call(postProductToPaymentApi, data);
    console.log('re', respon);
    if(respon.status === 201 || respon.status === 200) {
      yield put(postProductToPaymentSuccess(respon.data))
    } else {
      yield put(postProductToPaymentFailed())
    }
  } catch (err) {
    yield put(postProductToPaymentFailed())
  }
}
function* watchPostProductToPayment() {
  yield takeLatest(POST_PRODUCT_TO_PAYMENT_REQUEST, postProductToPaymentProcess)
}
function* watchAll() {
  yield all([
    watchGetProductDetail(),
    watchGetListProduct(),
    watchPostProductToCart(),
    watchPostProductToPayment()
  ])
}

export default watchAll;