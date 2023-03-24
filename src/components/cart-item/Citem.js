import './c-item.scss'
const Citem = ({dprops}) => {
    const {name, quantity,imageUrl, price} = dprops
    return (
        <div className="cart-item-container">
        <img src={imageUrl} alt={name}></img>
        {/* <h2>{name}</h2> */}
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div> 
        </div>
    )
}

export default Citem