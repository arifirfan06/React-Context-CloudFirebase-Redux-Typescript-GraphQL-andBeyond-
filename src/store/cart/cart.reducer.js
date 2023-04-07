import { CART_ACTION_TYPES } from "./cart.types";

export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
  };
  
  export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEM:
        return {
          ...state,cartItems: payload
        };
      case CART_ACTION_TYPES.CHANGE_IS_CART:
        return {
          ...state, isCartOpen: payload
        }
      default:
        return state
        // throw new Error(`Unhandle error in cart reducer type ${type}`);
    }
  };