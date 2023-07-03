import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },

    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },

    removeItemToCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },

    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer

// INEFFICIENT, destructure all in single object
// export const {setIsCartOpen} = cartSlice.actions
// export const {addItemToCart} = cartSlice.actions
// export const {removeItemToCart} = cartSlice.actions
// export const {clearItemFromCart} = cartSlice.actions

// 100!
export const {setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart} = cartSlice.actions
// export const cartReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEM:
//       return {
//         ...state,cartItems: payload
//       };
//     case CART_ACTION_TYPES.CHANGE_IS_CART:
//       return {
//         ...state, isCartOpen: payload
//       }
//     default:
//       return state
//       // throw new Error(`Unhandle error in cart reducer type ${type}`);
//   }
// };
