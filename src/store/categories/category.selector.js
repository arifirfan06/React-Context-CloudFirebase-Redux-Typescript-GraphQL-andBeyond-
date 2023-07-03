import { createSelector } from "reselect";


export const selectCtg = createSelector(
  [(state) => state.category],
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
