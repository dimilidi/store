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
import "./Store.css";

function Store() {
  // Shop Context Variables
  const {
    foundItem,
    categories,
    filterCategory,
    setFilteredItems,
    filteredItems,
  } = useContext(ShopContext);

  const handleFilter = (category) => {
    const newProductsList = products.filter(
      (item) => item.category.toLowerCase() == category.toLowerCase()
    );

    setFilteredItems(newProductsList);
  };

  const showAll = () => {
    setFilteredItems(products);
  };

  return (
    <>
      {/* Show all products if there is no found item from the search bar */}
      {!foundItem ? (
        <div className="store-con">
          <div className="filter">
            <ul>
              {categories.map((category, i) => (
                <li key={i} onClick={() => handleFilter(category)}>
                  {category.toLowerCase()}
                </li>
              ))}
              <li onClick={showAll}>all </li>
            </ul>
          </div>

          <div className="products-con">
            {/* If there are selected filtered Items, show them */}
            {filteredItems.length > 0
              ? filteredItems.map((product) => (
                  <Product {...product} />

                  // If no filtered Items are selected, show all products
                ))
              : products.map((product) => <Product {...product} />)}
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
