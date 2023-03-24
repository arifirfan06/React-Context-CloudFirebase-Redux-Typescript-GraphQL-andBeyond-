import { useState, createContext } from "react";
import shop_Data from '../db/shop-data.json'

export const ProductsCtx = createContext(null)

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(shop_Data)

const value = {
    products, setProducts
}
    return (
        <ProductsCtx.Provider value={value}>{children}</ProductsCtx.Provider>
    )
}