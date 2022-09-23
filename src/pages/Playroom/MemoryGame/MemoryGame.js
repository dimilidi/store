import {useContext, useState} from 'react';
import Cards from './Cards';
import {cards} from '../../../data/memory-cards';
import {MdOutlineRestartAlt} from 'react-icons/md';
import {motion} from 'framer-motion';


import { MemoryGameContext } from '../../../context/MemoryGameContext';
import './MemoryGame.css'

function MemoryGame() {

  const {
    items, 
    setItems,
    correct,
    setCorrect,
    isEnd,
    setIsEnd,
    prev, 
    setPrev,
    check

  } = useContext(MemoryGameContext);

    // Animation
    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};
    



  function restartGame() {

    cards.sort(() => Math.random() -0.5)
    setCorrect([]);
    setIsEnd(false);
    setItems(cards)
    items.map((el)=> el.stat = '')

  }


  return (
    <div className='memory-wrapper'>
      
        {isEnd ?
        <motion.button 
          initial={animateFrom} 
          animate={animateTo}
          transition={{delay: 0.05}}
          className='restart' onClick={()=>restartGame()}
        >
          play again
          <span><MdOutlineRestartAlt /></span>
        </motion.button>
        : 
        <h1>Memory Game</h1> }

        <Cards />        
    </div>
  )
}

export default MemoryGame



// TO DO :

// - game bug --> clear state after leaving playroom