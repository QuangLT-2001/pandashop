import HomeSaga from './container/Home/saga';
import ProductSaga from './container/Product/saga';
import DetailSaga from "./container/Detail/saga";
import PostSaga from "./container/ListPost/saga";
import PostDetailSaga from "./container/PostDetail/saga";
import CartSaga from "./container/Cart/saga";
import HeaderSaga from "./container/Header/saga";
import ColorSaga from "./container/ChangeColor/saga";
import PaySaga from "./container/Pay/saga";
import {all} from 'redux-saga/effects';

export  function* RootSaga() {
  yield all([
    ColorSaga(),
    HomeSaga(),
    ProductSaga(),
    DetailSaga(),
    PostSaga(),
    PostDetailSaga(),
    CartSaga(),
    HeaderSaga(),
    PaySaga()

  ])
}