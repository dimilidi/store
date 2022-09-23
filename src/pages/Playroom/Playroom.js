import React from 'react'
import Particles from './Particles/Particles'
import MemoryGame from './MemoryGame/MemoryGame'

function Playroom() {
  return (
  <div className='playroom'>
    <Particles />

    <MemoryGame /> 
 
  </div>
        
   
  )
}

export default Playroom