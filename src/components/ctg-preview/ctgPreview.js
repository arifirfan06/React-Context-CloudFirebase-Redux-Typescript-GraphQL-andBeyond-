import {Title, CtgPrevCtn, Preview} from './ctgPreview.styled'
import ProductCard from '../product-card/product-card.component'
import { Link } from 'react-router-dom'

const ctgPreview = ({title, products}) => {
    return (
        <CtgPrevCtn>
        <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
            {
                products.filter((_,i) => i < 4).map(item => <ProductCard key={item.id} product={item}></ProductCard>)
            }
        </Preview>
        </CtgPrevCtn>
    )
}

export default ctgPreview