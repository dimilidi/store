import React, { useContext } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';
import {products} from '../../data/products';
import ProductDetails from '../OrderButton/OrderButton'

function FoundItem() {
    const {getItem, addProduct, setFoundItem, foundItem, getProductQuantity} = useContext(ShopContext)
    // const [count, setCount] =useState(0)
    let param = useParams();
    let item= getItem(param.name);
    
    const quantity = getProductQuantity(item.id);

    const navigate = useNavigate();

    const handleBackToStore =() => {
        navigate('/store');
        setFoundItem(null);
    }

    const moveToNextProduct = () => {
        // setCount(count+1)
        // if(count == products.length-1) {
        //     setCount(count)
        // } 
        const itemNames = products.map((item, index) => item.name.toLowerCase())

        // setFoundItem(itemNames[count])
        products.map((el, index) => {
            if((el.id) > item.id) {
                setFoundItem(itemNames[item.id])
            }
        })

        navigate(`/store/${foundItem}`)

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
                        <ProductDetails id = {item.id}/>
            
                    )}
                </div>
                <img src = {item.picture} />

            </div>

        </>
        

    
    
 
    
    
    
    
  )
}

export default FoundItem