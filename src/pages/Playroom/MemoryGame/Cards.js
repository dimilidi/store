import {useState} from 'react';
import Card from './Card';
import {cards} from '../../../data/memory-cards';

function Cards() {

    const [items, setItems] = useState(cards);
    const [prev, setPrev] = useState(-1);

    function check(current) {
        if(items[current].id  == items[prev].id) {
            items[current].stat = 'correct';
            items[prev].stat = 'correct';
            setItems([...items])
            setPrev(-1);
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

    function handleClick(id)  {
        // items[id].stat = 'active'
        // setItems([...items])

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
            <Card key = {index}  item = {item} id = {index}  handleClick ={handleClick}/>
        ))}
     </div> 

  )
}

export default Cards