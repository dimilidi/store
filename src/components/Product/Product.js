// Hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Contexts
import { ShopContext } from '../../context/ShopContext';

// Components
import OrderButton from '../OrderButton/OrderButton';

// Icons
import { AiOutlineShoppingCart } from 'react-icons/ai';

// Utilities
import formatCurrency from '../../utilities/formatCurrency';

// Styles
import './Product.css';


function Product({id, name, price, picture}) {

  // Shop Context Variables
    const {
      addProduct, 
      getProductQuantity,  
      getItemById, 
      setFoundItem
    } = useContext(ShopContext)

  // Hook Variables
    const navigate = useNavigate()
 
  // Get Product Quantity
    const quantity = getProductQuantity(id);
  
  // Handle Link to Product Details
    const handleImageLink = (e) =>{
      const item = getItemById(id) 
      setFoundItem(name)
      navigate(`/store/${name.toLowerCase()}`)
    }
   
  return (
    <>
    <div className='product' >
      <img src = {picture} alt = '' onClick={(e)=>handleImageLink(e)}/>
  
        <div className='product-info'>
            <div className='product-main-info'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{formatCurrency(price)}</span>
            </div>
           
           {quantity === 0 ? (

            <button onClick={()=>addProduct(id)} className='add-btn'>
                <AiOutlineShoppingCart/> Buy
            </button> 
       
           ):(
            <OrderButton id = {id}/>
           )}
        </div>
    </div>
    </>
    
  )
}

export default Product