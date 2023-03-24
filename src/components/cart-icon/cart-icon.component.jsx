import { useContext } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingSvg, CIconCtn } from './cart-icon.styled.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CIconCtn onClick={toggleIsCartOpen}>
      <ShoppingSvg className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </CIconCtn>
  );
};

export default CartIcon;
