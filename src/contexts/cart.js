import { useState, createContext, useEffect } from "react";

const addToCart = (cartItems, addedProduct) => {
  console.log(addedProduct);
  const findExist = cartItems.find(
    (cartItem) => cartItem.id == addedProduct.id
  );
  if (findExist) {
    console.log(cartItems);
    return cartItems.map((item) =>
      item.id === addedProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...addedProduct, quantity: 1 }];
};

const reduceCartItem = (cartItems, reducedProduct) => {
  const isExist = cartItems.find((item) => item.id === reducedProduct.id);
  if (isExist.quantity == 1) {
    return cartItems.filter((item) => item.id !== reducedProduct.id);
  }
  return cartItems.map((item) => {
    if (item.id === reducedProduct.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};



export const CartCtx = createContext({
  isOpened: false,
  setState: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  deleteItem: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const newCart = cartItems.reduce((total, iv) => total + iv.quantity, 0);
    setCartCount(newCart);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const addCartItem = (addedProduct) => {
    setCartItems(addToCart(cartItems, addedProduct));
    console.log(cartItems);
  };

  const removeCartItem = (reducedProduct) => {
    setCartItems(reduceCartItem(cartItems, reducedProduct));
    // console.log(cartItems);
  };

  const deleteItem = (deleteItem) => {
    setCartItems((cartItems) => {
      return cartItems.filter(item => item.id !== deleteItem.id)
    })
  }

  const value = {
    isOpened: cart,
    setState: setCart,
    cartItems,
    addCartItem,
    removeCartItem,
    deleteItem,
    cartCount,
    total,
  };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
