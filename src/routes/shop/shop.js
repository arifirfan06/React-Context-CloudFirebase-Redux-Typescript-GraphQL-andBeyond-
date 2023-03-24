import shop_Data from '../../db/shop-data.json'
import { useContext } from 'react'
import { ProductsCtx } from '../../contexts/products'
import Pcard from '../../components/product-card/pcard'
import './shop.scss'

const Shop = () => {
const {products} = useContext(ProductsCtx)
    return (
        <div className='p-container'>
        {products.map(item => {
            return (
                <Pcard key={item.id} props={item}/>
            )
        })}
        </div>
    )
}

export default Shop;
