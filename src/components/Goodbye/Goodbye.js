import {useContext} from 'react';
import {UserContext} from '../../context/UserContext'

function Goodbye() {
 
    const {user} = useContext(UserContext)

    return (
      <div className='goodbye'>
          <h4>See you soon! </h4>
          
      </div>
    )
}

export default Goodbye