import { useContext, Fragment } from 'react';

import { CategoryContext } from '../../contexts/category.context';

import CtgPreview from '../../components/ctg-preview/ctgPreview'

const CtgPrev = () => {
  const { category } = useContext(CategoryContext);

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
