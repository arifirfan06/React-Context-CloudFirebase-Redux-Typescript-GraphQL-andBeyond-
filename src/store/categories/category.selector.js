import { createSelector } from "reselect";

const selectState = (state) => state.categories;

export const selectCtg = createSelector(
  [selectState],
  (ctgReducer) => ctgReducer.categories
);

export const categorySelector = createSelector(
  [selectCtg],
  (ctg) =>
    ctg.reduce((accumulate, docSnapshot) => {
      const { title, items } = docSnapshot;
      accumulate[title.toLowerCase()] = items;
      return accumulate;
    },
  {})
);
