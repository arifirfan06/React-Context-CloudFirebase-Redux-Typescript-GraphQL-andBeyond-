import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCart],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
))
// set"editor.parameterHints.enabled": false
// const newCartCount = newCartItems;
// const newCartTotal = newCartItems
