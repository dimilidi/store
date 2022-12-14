// Hooks
import { useContext } from 'react';
// Contexts
import { ShopContext } from '../../context/ShopContext';
// Styles
import './OrderButton.css'

function OrderButton({id}) {
    
    // Shop Context Variables
    const {
        getProductQuantity, 
        addProduct, 
        removeProduct, 
        deleteProduct
    } = useContext(ShopContext);

    // Get product quantity
    const quantity = getProductQuantity(id);

    return (
        <div className='product-details'>
            <div className='top-details'>
                <button className = 'count-btn' onClick={()=>addProduct(id)}>+</button>
                <div className='quantity-count'>
                    <span >{quantity}</span> in cart
                </div>
                <button className = 'count-btn' onClick={()=>removeProduct(id)}>-</button>
            </div>
            <div className='bottom-details'>
                <button className = 'count-btn' onClick={()=>deleteProduct(id)}>Delete</button>
            </div>
        </div>
    )
}

export default OrderButton