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
  getListPostSuccess,
  getPostDetailSuccess,
  getListPostFailed,
  getPostDetailFailed
} from "./actions";
import {
  GET_LIST_POST_REQUEST,
  GET_POST_DETAIL_REQUEST
} from "./contants";
import {
  getListPostApi,
  getPostIdApi
} from "./service";
function* getPostDetailProcess(params) {
  try {
    const { data, type } = params;
    const respon = yield call(getPostIdApi, data);
    if (respon.status === 200 || respon.status === 201) {
      yield put(getPostDetailSuccess(respon.data));
    }
    else {
      yield put(getPostDetailFailed())
    }
  } catch (err) {
    yield put(getPostDetailFailed())
  }
}
function* watchGetPostDetail() {
  yield takeLatest(GET_POST_DETAIL_REQUEST, getPostDetailProcess);
}
function* getListPostProcess(params) {
  try {
    const respon = yield call(getListPostApi);
    if (respon.status === 200 || respon.status === 201) {
      yield put(getListPostSuccess(respon.data));
    } else {
      yield put(getListPostFailed())
    }
  } catch (err) {
    yield put(getListPostFailed())
  }
}
function* watchGetListPost() {
  yield takeLatest(GET_LIST_POST_REQUEST, getListPostProcess);
}
function* watchAll() {
  yield all([
    watchGetPostDetail(),
    watchGetListPost()
  ])
}
export default watchAll;