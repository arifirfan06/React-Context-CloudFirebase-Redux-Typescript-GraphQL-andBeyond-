import './ctg.scss'
import { useParams } from 'react-router-dom'
import {useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {categorySelector} from '../../store/categories/category.selector'
import ProductCard from '../../components/product-card/product-card.component'
const Category = () => {
    const category = useSelector(categorySelector)
    const {title} = useParams()
    const [product, setProduct] = useState([])
    //this also work const [product, setProduct] = useState(category[title])
    useEffect(() => {
        setProduct(category[title])
    }, [category,title]) 
    // const product = category[title]
    return (
        <div className='ctg-container'>
            {
                product && product.map(item => <ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
    )
}

export default Category