
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { CartDropDownCtn, EmptyMSg, CartItems } from "./CartDropDownStyled";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownCtn>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropDownCtn>
  );
};

export default CartDropdown;
