import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {categorySelector} from '../../store/categories/category.selector'
import CtgPreview from '../../components/ctg-preview/ctgPreview'

const CtgPrev = () => {
const category = useSelector(categorySelector)
// console.log('this is result reduce', category)
  return (
    <>
    {
      Object.keys(category).map(item => {
        const products = category[item]
        return <CtgPreview key={products.id} title={item} products={products}></CtgPreview>
      })
    }

    </>
  );
};

export default CtgPrev;
