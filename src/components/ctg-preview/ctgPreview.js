import './ctg-preview.scss'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const ctgPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'>
        <h2>
            <Link to={title}>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
            {
                products.filter((_,i) => i < 4).map(item => <ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    )
}

export default ctgPreview