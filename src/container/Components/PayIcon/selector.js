import { createSelector } from "reselect";
const selectColorReducer = state => state.colorReducer;
export const selectColor = createSelector(
     selectColorReducer,
     state => state.color
)