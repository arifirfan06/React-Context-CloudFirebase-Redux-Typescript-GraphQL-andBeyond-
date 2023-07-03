import { createSlice } from "@reduxjs/toolkit"

export const CATEGORY_INIT_STATE = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: CATEGORY_INIT_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const {setCategories} = categorySlice.actions
export const ctgSlice = categorySlice.reducer