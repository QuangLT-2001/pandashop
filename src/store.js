import { createStore, applyMiddleware } from "redux";
import rootReducer  from "./reducer";
import {RootSaga} from "./saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);
export default Store;