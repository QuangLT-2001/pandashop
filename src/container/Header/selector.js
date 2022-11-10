import { createSelector } from "reselect";
const selectHeaderReducer = state => state.header;
const selectColorReducer = state => state.colorReducer
export const selectProducts = createSelector(
  selectHeaderReducer,
  state => state.products
)
export const selectCount = createSelector(
  selectHeaderReducer,
  state => state.count
)
export const selectColor = createSelector(
  selectColorReducer,
  state => state.color
)
export const selectCart = createSelector(selectHeaderReducer,state => state.cart)