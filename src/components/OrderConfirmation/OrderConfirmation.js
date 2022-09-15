import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

function OrderConfirmation() {

    const {user} = useContext(UserContext)

  return (
    <div className='order-confirm'>
        <h4>Dear <span>{user.name}</span>,<br/>your order has been placed.<br/> You will receive soon an email with your tracking information. </h4>
        <h5>Your My Store Team</h5>
        
    </div>
  )
}

export default OrderConfirmation