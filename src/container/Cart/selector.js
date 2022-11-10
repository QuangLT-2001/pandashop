import { createSelector } from "reselect";
const selectCartReducer = state => state.cart;
const selectColorReducer = state => state.colorReducer;
export const selectIsLoading = createSelector(
  selectCartReducer,
  state => state.isLoading
)
export const selectCart = createSelector(
  selectCartReducer,
  state => state.carts
)
export const selectProducts = createSelector(
  selectCartReducer,
  state => state.products
)
export const selectColor = createSelector(
  selectColorReducer,
  state => state.color
)