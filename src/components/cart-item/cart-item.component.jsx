import {CartItemCtn, ItemDetail, StyledImg, Name} from './cart-item.styled';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemCtn>
      <StyledImg src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetail>
    </CartItemCtn>
  );
};

export default CartItem;
