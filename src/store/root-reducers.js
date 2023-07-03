import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './user/user.reducer'
import { ctgSlice } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    category: ctgSlice,
    cart: cartReducer,
})