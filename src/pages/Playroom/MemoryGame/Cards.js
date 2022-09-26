import {useState, useContext} from 'react';
import Card from './Card';
import { MemoryGameContext } from '../../../context/MemoryGameContext';
import {cards} from '../../../data/memory-cards'

function Cards() {

    const {
        items, 
        setItems,
        prev, 
        setPrev,
        check
    
      } = useContext(MemoryGameContext)
    


    function handleClick(id)  {
        if(prev === -1) {
            items[id].stat = 'active';
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    
  return (
     <div className='con' >
        {items.map((item, index) => (
            <Card 
                key = {index}  
                item = {item} 
                id = {index}  
                handleClick ={handleClick}
            />
        ))}
     </div> 

  )
}

export default Cards