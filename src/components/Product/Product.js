
import { ShopContext } from '../../context/ShopContext';
import ProductDetails from '../OrderButton/OrderButton';
import {useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useNavigate, NavLink } from 'react-router-dom';


function Product({id, name, price, picture}) {

    const {isShown, toggleIsShown, addProduct, getProductQuantity, getItem, getItemById, setFoundItem} = useContext(ShopContext)

    const navigate = useNavigate()
    const quantity = getProductQuantity(id);

    const handleImageLink = (e) =>{
      const item = getItemById(id) 
      console.log('ITEM',item.name);
      setFoundItem(name)
      navigate(`/store/${name.toLowerCase()}`)
    }
   
  return (
    <>
    <div className='product' >
      <img src = {picture} onClick={(e)=>handleImageLink(e)}/>
  
        <div className='product-info'>
            <div className='product-main-info'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{price}€</span>
                
            </div>
            {/* {isShown[id] && <ProductDetails id = {id}/>} */}
           
           {quantity === 0 ? (

            <button onClick={()=>addProduct(id)} className='add-btn'>
                <AiOutlineShoppingCart/> Buy
                {/* {isShown[id] ? 'Hide Details' : 'Show Details'} */}
                {/* onClick={()=>toggleIsShown(id)} */}
            </button> 
       
           ):(
            <ProductDetails id = {id}/>

           )}
        </div>
    </div>
    </>
    
  )
}

export default Product