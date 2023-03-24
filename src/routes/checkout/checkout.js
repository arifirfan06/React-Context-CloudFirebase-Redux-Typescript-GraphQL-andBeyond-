import "./checkout.scss";
import { CartCtx } from "../../contexts/cart";
import { useContext } from "react";
import CheckoutItem from '../../components/checkout-item/checkoutItem'
const Checkout = () => {
  const { cartItems, total } = useContext(CartCtx);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        return (
          <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
        );
      })}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;
