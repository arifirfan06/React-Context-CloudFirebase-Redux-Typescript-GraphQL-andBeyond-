import { createContext, useState, useEffect } from 'react';

import { addCollectionDocs } from '../utils/firebase/firebase.utils.js';

import shopData from '../shop-data.js';

import { getCategory } from '../utils/firebase/firebase.utils.js';

export const CategoryContext = createContext({
  category: {},
});

export const CategoryProvider = ({ children }) => {
  const [category, setCtg] = useState({});
  // useEffect(() => {
  //   addCollectionDocs('category', shopData)
  // }, [])
  useEffect(() => {
    const getData = async () => {
    const data = await getCategory()
      console.log(data)
      setCtg(data)
  }
  getData()
  }, [])
  const value = { category };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
