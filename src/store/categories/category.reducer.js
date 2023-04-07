import { CATEGORIES_ACTION_TYPES } from "./category.type"

export const CATEGORY_INIT_STATE = {
    categories: []
}

export const categoriesReducer = (state = CATEGORY_INIT_STATE, action) => {
    const {type, payload} = action

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
        return {...state, categories: payload}
        default:
        return state
    }
}