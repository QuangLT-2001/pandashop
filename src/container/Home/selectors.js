import { createSelector } from "reselect";
import { initialState } from "./reducer";
// select by level reducer
const selectProductReducer = state => state.productHome || initialState;
const selectColorReducer = state => state.colorReducer
// state is state store
// query by each sel reducer
export const selectListProduct = createSelector(
  // truy van từng trường reducer
  // state is productReducer
  selectProductReducer,
  state => state.products
)
export const selectIsLoading = createSelector(
  selectProductReducer,
  state => state.isLoading
)
export const selectListInnerProduct = createSelector(
  selectProductReducer,
  state => state.listInnerProduct
)
export const selectProductTabs = createSelector(
  selectProductReducer,
  state => state.productTabs
)
export const selectPosts = createSelector(
  selectProductReducer,
  state => state.posts
)
export const selectColor = createSelector(
  selectColorReducer,
  state => state.color
)