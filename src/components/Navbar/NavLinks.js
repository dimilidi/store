// Hooks
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
// Contexts
import { ShopContext } from "../../context/ShopContext";
// Animation
import { motion } from 'framer-motion';
// Styles
import './Navbar.css'

function NavLinks({isMobile, closeMobileMenu}) {

    // Shop Context Variables
    const {setFoundItem} = useContext(ShopContext);
    // Animation
    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};
   

  return (
    <ul className={"nav"}>
      <motion.li
            initial={animateFrom} 
            animate={animateTo}
            transition={{delay: 0.05}}
            onClick={()=> isMobile && closeMobileMenu()}>
        <NavLink to="/">Home</NavLink>
      </motion.li>

      <motion.li 
            initial={animateFrom} 
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={()=> isMobile && closeMobileMenu()}>
        <NavLink onClick={() => setFoundItem(null)} to="/store">
          Store
        </NavLink>
      </motion.li>
      
      <motion.li 
            initial={animateFrom} 
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={()=> isMobile && closeMobileMenu()}>
        <NavLink to="/playroom">Playroom</NavLink>
      </motion.li>
    </ul>
  );
}

export default NavLinks;
