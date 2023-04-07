import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { removeItemToCart } from '../../store/cart/cart.action';
import { clearItemFromCart } from '../../store/cart/cart.action';
// import { CartContext } from '../../contexts/cart.context';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch()
  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);
  const AllCartItems = useSelector(selectCartItems)
  const clearItemHandler = () => dispatch(clearItemFromCart(AllCartItems,cartItem));
  const addItemHandler = () => dispatch(addItemToCart(AllCartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(AllCartItems,cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
