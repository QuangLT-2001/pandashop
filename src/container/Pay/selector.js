import { createSelector } from "reselect";
const selectPayment = state => state.payment;
export const selectIsLoading = createSelector(
     selectPayment,
     state => state.isLoading
)
export const selectProducts = createSelector(
     selectPayment,
     state => state.products
)