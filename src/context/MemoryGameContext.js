import { createContext } from "react";
import { useState, useEffect } from "react";
import { cards } from "../data/memory-cards";



export const MemoryGameContext = createContext()

export const MemoryGameProvider = ({children}) =>{

      
    const [items, setItems] = useState(cards);
    const [prev, setPrev] = useState(-1);
    const [correct, setCorrect] = useState([]);
    const [isEnd, setIsEnd] = useState(false);
  

    function check(current) {
        if(items[current].id  == items[prev].id) {
            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items]);
            setPrev(-1);

           const guesses = items.map((el) => el.stat);
           guesses.map((e) => e=='correct' ? setCorrect([...correct, e ]) : null)
           if(correct.length === 7){
            setIsEnd(true);
           }

           console.log('G',guesses);
           console.log('C',correct);

        } else {
            items[current].stat = 'wrong';
            items[prev].stat = 'wrong';
            setItems([...items])
            setTimeout(() => {
                items[current].stat = '';
                items[prev].stat = '';
                setItems([...items])
                setPrev(-1);

            }, 1000)
    

        }
    }

  
    const exportData = {items, setItems, prev, setPrev, correct, setCorrect, isEnd, setIsEnd, check}

    return (
      <MemoryGameContext.Provider value = {exportData} >
         {children}
      </MemoryGameContext.Provider>
    )
}
