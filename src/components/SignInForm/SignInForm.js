import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

function SignInForm() {
  const {user, setUser, error, setError, Login, Logout, details, setDetails, isLoggedIn,setIsLoggedIn, setName} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault() ;
    Login(details);
  }

  return (
    <div className='sign-in'>
    {(user.email != '' )? (
     <WelcomeMessage />
    ): (
      <form className = 'sign-in-form' onSubmit={handleSubmit}>
        <div className='form-inner'>
          <h2>Login</h2>
          {error != '' ? <div className='error'>{error}</div> : ''}
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input 
              type='text' 
              name = 'name' 
              id ='name'
              onChange={(e)=> setDetails({...details, name: e.target.value})}
              value ={details?.name}
            
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
            type='email' 
            name = 'email' 
            id ='email'
            onChange={(e)=> setDetails({...details, email: e.target.value})}
            value ={details.email}

            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input 
            type='password' 
            name = 'password' 
            id ='password'
            onChange={(e)=> setDetails({...details, password: e.target.value})}
            value ={details.password}
            />
          </div>
          <input onClick={()=>setIsLoggedIn(true)} type='submit' value='Login'/>
        </div>
        
      </form>
    )}
     
     
    </div>
    
  )
}

export default SignInForm