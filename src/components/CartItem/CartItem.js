// Hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Contexts
import { ShopContext } from "../../context/ShopContext";
// Data
import {products} from '../../data/products';
// Utilities
import formatCurrency from "../../utilities/formatCurrency";
// Styles
import './CartItem.css'


function CartItem({id, quantity}) {

    const navigate = useNavigate();
    
    const {deleteProduct, setFoundItem, closeCart} = useContext(ShopContext);
    const item = products.find(item => item.id===id)
    if( item ==null) return null;


    const handleImageLink = () =>{
        setFoundItem(item.name);
        navigate(`/store/${item.name.toLowerCase()}`);
        closeCart()
    }


  return (
    <div className="cart-item-con">
        <img 
            src={item.picture} 
            alt = ''
            onClick={handleImageLink} 
        />
        <div className="cart-item-info">
            <div className="cart-item-details">
                <div className="cart-item-price-con"> {item.name} 
                    {quantity>1 &&  <span className="cart-item-quantity ">x{quantity}</span>}
                </div>
                <div className="cart-item-price">{formatCurrency(item.price)}</div>
            </div>
             <div className="total-price">{formatCurrency(item.price * quantity)}</div>
        </div>
        <button className="remove-cart-item-btn" onClick={()=>deleteProduct(item.id)}>x</button>
    </div>
  )
}

export default CartItem