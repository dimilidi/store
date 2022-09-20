// Hooks
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";

// Components
import Product from "../../components/Product/Product";
import Filter from "../../components/Filter/Filter";

// Contexts
import { ShopContext } from "../../context/ShopContext";

// Data
import { products } from "../../data/products";

// Styles
import "./Store.css";

function Store() {

  // Shop Context Variables
  const {
    foundItem,
    filteredItems,
  } = useContext(ShopContext);


  return (
    <>
      {/* Show all products if there is no found item from the search bar */}
      {!foundItem ? (
        <div className="store-con">
          <Filter />

          <div className="products-con">
            {/* If there are selected filtered Items, show them */}
            {filteredItems.length > 0
              ? filteredItems.map((product) => (
                  <Product {...product} />

                  // If no filtered Items are selected, show all products
                ))
              : products.map((product) => <Product key = {product.id} {...product} />)}
          </div>
          
        </div>
      ) : (
        // Show found item (product card with product details)
        <Outlet />
      )}
    </>
  );
}

export default Store;
