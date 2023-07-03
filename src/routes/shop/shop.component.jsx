
import { useDispatch } from "react-redux";
import CtgPrev from "../../routes/ctg-prev/ctgPrev";
import { Route, Routes } from "react-router-dom";
import Category from "../category/ctg";
import { getCategory } from '../../utils/firebase/firebase.utils';
import { useEffect } from "react";
import { setCategories } from "../../store/categories/category.reducer";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      const ctgArray = await getCategory();
      dispatch(setCategories(ctgArray));
    };
    getData();
  }, []);
  return (
    <Routes>
      <Route index element={<CtgPrev />}></Route>
      <Route path=":title" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
