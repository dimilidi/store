import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

function OrderButton({id}) {
    console.log('ID',id);
    
    const {getProductQuantity, addProduct, removeProduct, deleteProduct} = useContext(ShopContext);

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