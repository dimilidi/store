// Hooks
import { useContext } from 'react';
// Context
import { ShopContext } from '../../context/ShopContext';
// Data
import { products }  from '../../data/products';
// Style
import './Filter.css'



function Filter() {

   // Shop Context Variables
   const {
    categories,
    setFilteredItems,
    filteredItems,
  } = useContext(ShopContext);


  const handleFilterSelect = (e) => {
    const newProductsList = products.filter(
      (item) => item.category.toLowerCase() == e.target.value.toLowerCase()
    );
    setFilteredItems(newProductsList);

    console.log(filteredItems);

  }
  return (
    <div className="filter">
            <select onChange={(e)=>handleFilterSelect(e)}>
              <option value="" disabled selected >select a category</option>
              {categories.map((category, i) => (
                <option key={i}  >
                  {category.toLowerCase()}
                </option>
              ))}
              <option >all </option>
            </select>
          </div>
  )
}

export default Filter