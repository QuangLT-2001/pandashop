import { createSelector } from "reselect";
import { initialState } from "./reducer";
// select by level reducer
const selectProductReducer = state => {
  return state.listProduct
}
const selectColorReducer = state => state.colorReducer
// state is state store
// query by each sel reducer
export const selectProducts = createSelector(
  // truy van từng trường reducer
  // state is productReducer
  selectProductReducer,
  state => state.products
)
export const selectIsLoading = createSelector(
  selectProductReducer,
  state => state.isLoading
)

export const selectColor = createSelector(
  selectColorReducer,
  state => state.color
)