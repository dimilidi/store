import { products } from "../data/products";
import Product from '../components/Product/Product'
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Store() {
  const {foundItem} = useContext(ShopContext)
  return (
    <>
    {!foundItem ? 
    <div className="store-con">
      {products.map((product) => <Product {...product}/>)}
    </div>
    :
    <Outlet />
    }
    
    </>
   
  )
}

export default Store