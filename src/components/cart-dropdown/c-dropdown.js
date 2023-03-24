import "./c-dropdown.scss";
import Button from "../button/button.component";
import Citem from "../cart-item/Citem";
import { useContext } from "react";
import { CartCtx } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";

const Cdrop = () => {
  const { cartItems } = useContext(CartCtx);
  const nav = useNavigate()
  const goCheckout = () => {
    nav('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <Citem key={item.id} dprops={item} />
        ))}
        <Button buttonType="inverted" onClick={goCheckout}>Go To Checkout</Button>
      </div>
    </div>
  );
};

export default Cdrop;
