
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartIsOpen } from '../../store/cart/cart.selector';
import { selectCartCount } from '../../store/cart/cart.selector';
import { CartContext } from '../../contexts/cart.context';
import { ShoppingSvg, CIconCtn } from './cart-icon.styled.js';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectCartIsOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CIconCtn onClick={toggleIsCartOpen}>
      <ShoppingSvg className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </CIconCtn>
  );
};

export default CartIcon;
