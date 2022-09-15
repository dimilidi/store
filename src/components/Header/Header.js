import React, { useContext } from "react";
import { NavLink,Link, Navigate, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import {AiOutlineUser} from 'react-icons/ai'
import { ShopContext } from "../../context/ShopContext";
import {UserContext} from '../../context/UserContext';
import Search from "../Search/Search";
import Navbar  from "../Navbar/Navbar";

function Header() {
 
    const { openCart, totalAmount, setFoundItem , openHamburger, setOpenHamburger } = useContext(ShopContext);
    const {isLoggedIn, setIsLoggedIn,Logout} = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleSignIn = () => {
        setOpenHamburger(false);

      if(isLoggedIn){
        //   Logout();
          navigate('/welcome')
      } else {
          Logout();
  
          navigate('/sign-in')
  
      }
    }

    const handleCart = () => {
        openCart(); 
        setOpenHamburger(false);
    }
  
  
    return (
      <>
       <div className=" header-con">
          <div className="left-aligner">
            
              <span className="logo"><Link onClick={()=>setFoundItem(null)} to='/'>My Store</Link></span>
             <Navbar />
          </div>
          

          <div>
              <span 
                  className="sign-in-link" 
                  onClick={()=>handleSignIn()}
              >
                 <AiOutlineUser />
              </span>
  
        
                  <button onClick={handleCart} className="cart-btn">
                      <BsCart /> 
                      {totalAmount > 0 &&
                      <span className="count">{totalAmount}</span>}
                  </button>
            
          </div>
          
        </div>
        <Search />
      </>
       
    
    )
}

export default Header