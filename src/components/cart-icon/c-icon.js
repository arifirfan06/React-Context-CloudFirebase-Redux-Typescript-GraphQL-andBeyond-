import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import { CartCtx } from '../../contexts/cart'
import './c-icon.scss'
import { useContext } from 'react'
const CIcon = () => {
const {isOpened,setState, cartCount} = useContext(CartCtx)
console.log(cartCount)
const openClose = () => setState(!isOpened)

    return (
        <div className='cart-icon-container' onClick={openClose}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CIcon