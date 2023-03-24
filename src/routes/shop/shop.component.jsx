// import { useContext, Fragment } from 'react';

// import { CategoryContext } from '../../contexts/category.context';

// import CtgPreview from '../../components/ctg-preview/ctgPreview'
import CtgPrev from '../../routes/ctg-prev/ctgPrev'
import { Route, Routes } from 'react-router-dom';
import Category from '../category/ctg'

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CtgPrev/>}></Route>
      <Route path=':title' element={<Category/>}></Route>
    </Routes>
  );
};

export default Shop;
