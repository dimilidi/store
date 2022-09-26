// Hooks
import { useContext, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
// Components
import OrderButton from '../OrderButton/OrderButton';
// Contexts
import { ShopContext } from '../../context/ShopContext';
// Data
import {products} from '../../data/products';
// Styles
import './FoundItem.css'


function FoundItem() {
  
// Shop Context variables
const {
    getItem, 
    addProduct, 
    setFoundItem, 
    foundItem, 
    getProductQuantity
} = useContext(ShopContext)


// Hook variables  
let param = useParams();
let item= getItem(param.name);
const navigate = useNavigate();

const quantity = getProductQuantity(item.id);

// onClick Handler
    // Back to Store
    const handleBackToStore =() => {
        navigate('/store');
        setFoundItem(null);
    }
   
    // Next Product
    useEffect(() => {
        navigate(`/store/${foundItem}`)
        
    },[foundItem]);

    const moveToNextProduct = () => {
        const itemNames = products.map((item, index) => item.name.toLowerCase());
        setFoundItem(itemNames[item.id])
    }

 
    
  return (
    <>
    <div className='details-nav'>
        <button className='back-to-store-btn' onClick={handleBackToStore}>Back to Store</button>
        <button className='next-product-btn' onClick={moveToNextProduct}>Next Product</button>
    </div>
    <div className='details'>
        <div className='column'>
            <div className='column-info'>
                <p className='category'>{item.category}</p>
                <div className='onrow'>
                    <p>{item.name}</p>
                    <p>{item.price} €</p>
                </div>
                <div className='extra-info'>
                    <p>{item.description}</p>
                    <p>Available: {item.isAvailable ? 'Yes' : 'No'}</p>
                </div>
            </div>
            
            {quantity === 0 ? (
            <button className='add-btn' onClick={()=>addProduct(item.id)}>Add to cart</button>
            ):(
                <OrderButton id = {item.id}/>
    
            )}
        </div>
        <img src = {item.picture} alt = '' />

    </div>
    </>
  )
}

export default FoundItem