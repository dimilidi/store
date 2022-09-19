import { createContext } from "react";
import { useState, useEffect } from "react";
import Cart from "../components/Cart/Cart";
import { products } from "../data/products";







export const ShopContext = createContext()

export const ShopProvider = ({children}) =>{


  const [cartItems, setCartItems] =useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [searchedItem, setSearchedItem] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);



  const totalAmount = cartItems.reduce((acc,curr) =>  acc + curr.quantity,0);
  const openCart =()=> setIsOpen(true);
  const closeCart =()=> setIsOpen(false);


  function getItem(itemName){
      return products.find((item) => (item.name).toLowerCase() === itemName.toLowerCase())
  }

  function getItemById(itemId){
      return products.find((item) => (item.id)=== itemId)
  }

  const toggleIsShown = (id) => {
      setIsShown({
        ...isShown, 
        [id]: !isShown[id],
      })
  }

// Product Categories 
  const allCategories =  products.reduce((acc, curr) => {
     acc.push(curr.category)
     return acc
  },[]);

   const categories = allCategories.filter(function(item, pos){
    return allCategories.indexOf(item)== pos; 
  });

  


 

  const filterCategory = (category) => {
    const newProductsList = products.filter((item) => 
    (item.category).toLowerCase() == category);
    console.log(newProductsList)

     setFilteredItems(newProductsList);
  }
console.log(filteredItems);




  const getProductQuantity = (id)=> {
        const exist = cartItems.find(item  => item.id=== id);
      if(exist?.id === id) {
        return exist.quantity
      } else {
        return 0
      }
  }


  const addProduct = (id)=> {
    const exist = cartItems.find(item  => item.id=== id);
    console.log('zz',exist);

    if(exist) {
        setCartItems(
            cartItems.map((item)=>
                item.id === id ? {...exist, quantity:exist.quantity + 1} : item
            ));
    }else {
        setCartItems([...cartItems, {id, quantity: 1}])
    }
  };

 

  const removeProduct = (id)=> {
    const exist = cartItems.find(item  => item.id === id);
        if(exist?.quantity === 1) {

            setCartItems(cartItems.filter((item) =>item.id !== id));

        } else {
            setCartItems(
                cartItems.map((item)=>
                    item.id === id ? {...exist, quantity:exist.quantity - 1} : item
                ));
        }
  };


  const deleteProduct = (id)=> {
    setCartItems(cartItems.filter((item) =>item.id !== id));
  }



  // Warenkorb sichtbar bei neu laden
  useEffect(() => {
    const json = localStorage.getItem("cartItems");
    const loadedItems = JSON.parse(json);
    if (loadedItems) {
        setCartItems(prevItems => [...prevItems, ...loadedItems]);
    }
    }, []);


    useEffect(() => {
        const json = JSON.stringify(cartItems);
       localStorage.setItem("cartItems", json);
      }, [cartItems]);


 




  
    const exportData = {getProductQuantity, addProduct, removeProduct, deleteProduct, cartItems,setCartItems, totalAmount, openCart, closeCart, toggleIsShown, isShown, setIsShown, searchedItem, setSearchedItem, foundItem, setFoundItem, getItem, getItemById, openHamburger, setOpenHamburger, filterCategory, categories, setFilteredItems, filteredItems}

    return (
      <ShopContext.Provider value = {exportData} >
         {children}
         <Cart isOpen = {isOpen} />
      </ShopContext.Provider>
    )
}
