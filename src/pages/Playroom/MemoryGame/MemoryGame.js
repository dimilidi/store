// Hooks
import {useContext} from 'react';
// Components
import Cards from './Cards';
// Contexts
import { MemoryGameContext } from '../../../context/MemoryGameContext';
// Data
import {cards} from '../../../data/memory-cards';
// Icons
import {MdOutlineRestartAlt} from 'react-icons/md';
// Animation
import {motion} from 'framer-motion';
// Style
import './MemoryGame.css';


function MemoryGame() {

  const {
    items, 
    setItems,
    setCorrect,
    isEnd,
    setIsEnd
  } = useContext(MemoryGameContext);

    // Animation
    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};
    

  function restartGame() {
    cards.sort(() => Math.random() -0.5);
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

