// Hooks
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
// Icons
import { CgArrowRight } from 'react-icons/cg';
// Styles
import './WelcomeMessage.css'



function WelcomeMessage() {

  // User Context Variables
  const {user, Logout} = useContext(UserContext);

  return (
    <div className='welcome'>
        <h2>Hello, <span>{user.name}</span>!</h2>
        <div className="home-btn">
            <button>
              <NavLink to='/store'>
                Visit My Store
                <span><CgArrowRight/></span>
              </NavLink>
            </button>
            <button >
              <NavLink to='/playroom'>
                Go to My Playroom
                <span><CgArrowRight/></span>
              </NavLink></button>
            <button onClick={()=>Logout()}>
              <NavLink to='/bye'>
                Sign out
                <span><CgArrowRight/></span>
              </NavLink>
            </button>
        </div> 
  </div>
  )
}

export default WelcomeMessage