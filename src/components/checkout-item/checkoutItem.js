import './checkoutItem.scss'
import { useContext } from 'react'
import { CartCtx } from '../../contexts/cart' 

const CheckoutItem = ({cartItem}) => {
    const {cartCount, addCartItem, removeCartItem, deleteItem} = useContext(CartCtx)

    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div className='arrow' onClick={() =>removeCartItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() =>addCartItem(cartItem)} >&#10095;</div>
            </span>
            
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem