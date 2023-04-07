import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";
// without {} or () in the code bellow will return a value
export const setCategories = (ctgArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, ctgArray)