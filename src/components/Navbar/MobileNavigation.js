// Hooks
import { useContext } from 'react';

// Components
import NavLinks from './NavLinks';

// Contexts
import { ShopContext } from '../../context/ShopContext';

// Icons
import {VscMenu} from 'react-icons/vsc';
import {CgClose} from 'react-icons/cg';



function MobileNavigation() {
    const {openHamburger, setOpenHamburger} = useContext(ShopContext)

    const hamburgerIcon = <VscMenu 
                            className='hamburger' 
                            size='40px' 
                            color='gray'
                            onClick={()=>setOpenHamburger(!openHamburger) }
                        />
    const closeIcon = <CgClose 
                            className='hamburger' 
                            size='40px' 
                            color='gray'
                            onClick={()=>setOpenHamburger(!openHamburger) }
                        />
    
    const closeMobileMenu = () => setOpenHamburger(false);

  return (
    <nav className='mobile-navigation'>
        {openHamburger ? closeIcon : hamburgerIcon}
        {openHamburger && <NavLinks isMobile={true} closeMobileMenu = {closeMobileMenu}/>}
    </nav>
   
  )
}

export default MobileNavigation