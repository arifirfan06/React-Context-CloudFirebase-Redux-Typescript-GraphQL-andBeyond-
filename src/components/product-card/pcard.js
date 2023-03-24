import './p-card.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartCtx } from '../../contexts/cart'

const Pcard = (props) => {
    const {name, price, imageUrl} = props.props
    // console.log(props)
    const {addCartItem} = useContext(CartCtx)

    const addItem = () => {
        addCartItem(props.props)
    }
    return (
        <div className='product-card-container'>
        <img src={props.props.imageUrl}/>
        <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addItem}>Add to Cart</Button>
        </div>
    )
}

export default Pcard