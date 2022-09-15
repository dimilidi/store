import React, { useContext } from 'react'
import {CgArrowRight} from 'react-icons/cg';
import { UserContext } from '../../context/UserContext'
import {NavLink} from 'react-router-dom';

function WelcomeMessage() {
    const {user,Logout} = useContext(UserContext)
  return (
    <div className='welcome'>
        <h2>Hello, <span>{user.name}</span>!</h2>
        <div className="home-btn">
            <button><NavLink to='/store'>Visit My Store<span><CgArrowRight/></span></NavLink></button>
            <button ><NavLink to='/playroom'>Go to My Playroom<span><CgArrowRight/></span></NavLink></button>
            <button onClick={()=>Logout()}><NavLink to='/bye'>Sign out<span><CgArrowRight/></span></NavLink></button>
        </div> 
        {/* <h5><NavLink to='/store'>Visit My Store</NavLink></h5>
        <h5><NavLink to='/playroom'>Go to My Playroom</NavLink></h5> */}
  </div>
  )
}

export default WelcomeMessage