// Hooks
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// Contexts
import { ShopContext } from "../../context/ShopContext";
import { UserContext } from '../../context/UserContext';
// Components
import Search from "../Search/Search";
import Navbar  from "../Navbar/Navbar";
// Icons
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from 'react-icons/ai';
// Styles
import './Header.css'



function Header() {

  // User Context Variables
    const {
      isLoggedIn, 
      Logout
    } = useContext(UserContext);

  // Shop Context Variables
    const { 
      openCart, 
      totalAmount, 
      setFoundItem, 
      setOpenHamburger 
    } = useContext(ShopContext);

  // Hook Variables
    const navigate = useNavigate();
  
  // Handlers
    // Sign-in Handler
    const handleSignIn = () => {
      setOpenHamburger(false);
      if(isLoggedIn){
        //   Logout();
          navigate('/welcome');
      } else {
          Logout();
          navigate('/sign-in');
      }
    }

    // Cart Handler
    const handleCart = () => {
        openCart(); 
        setOpenHamburger(false);
    }
  
  
  return (
    <>
    <div className=" header-con">
      <div className="left-aligner">

        {/* Logo */}
        <span className="logo">
          <Link to='/' onClick={()=>setFoundItem(null)} >
            My Store
          </Link>
        </span>

        {/* Navigation */}
        <Navbar /> 
      </div>

      <div className="right-aliner">
        {/* Sign-in Icon */}
        <span 
            className="sign-in-link" 
            onClick={()=>handleSignIn()}
        >
            <AiOutlineUser />
        </span>

        {/* Cart Icon */}
          <button onClick={handleCart} className="cart-btn">
              <BsCart /> 
              {totalAmount > 0 &&
              <span className="count">{totalAmount}</span>}
          </button>
      </div>
    </div>

    {/* Search Bar */}
    <Search />
    </>
  )
}

export default Header