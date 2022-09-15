// Hooks
import { Outlet } from "react-router-dom";
import { useContext } from "react";

// Components
import Product from "../../components/Product/Product";

// Contexts
import { ShopContext } from "../../context/ShopContext";

// Data
import { products } from "../../data/products";

// Styles 
import './Store.css'


function Store() {
  // Shop Context Variables
  const { foundItem } = useContext(ShopContext);

  return (
    <>
      {/* Show all products if there is no found item from the search bar */}
      {!foundItem ? (
        <div className="store-con">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      ) : (
        // Show found item (product card with product details)
        <Outlet />
      )}
    </>
  );
}

export default Store;
