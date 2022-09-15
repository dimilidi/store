import NavLinks from './NavLinks';
import { useContext } from 'react';
import {VscMenu} from 'react-icons/vsc';
import {CgClose} from 'react-icons/cg';
import { ShopContext } from '../../context/ShopContext';



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