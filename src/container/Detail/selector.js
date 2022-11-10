import {createSelector} from 'reselect';
const selectDetailReducer = state => state.detail;
const selectColorReducer = state => state.colorReducer;
export const selectIsLoading = createSelector(
  selectDetailReducer,
  state => state.isLoading
)

export const selectDetail = createSelector(
  selectDetailReducer,
  state => state.detail
)
export const selectError = createSelector(
  selectDetailReducer,
  state => state.error
)
export const selectCounter = createSelector(
  selectDetailReducer,
  state => state.counter
)
export const selectProducts = createSelector(
  selectDetailReducer,
  state => state.products
)
export const selectCheck = createSelector(
  selectDetailReducer,
  state => state.check
)
export const selectProductCart = createSelector(
  selectDetailReducer,
  state => state.productCart
)

export const selectColors = createSelector(
  selectColorReducer,
  state => state.color
)
export const selectCheckPayment = createSelector(
  selectDetailReducer,
  state => state.checkPayment
)