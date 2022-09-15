import { getActiveElement } from '@testing-library/user-event/dist/utils';
import {useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import {products} from '../../data/products';

function Search() {

    const {searchedItem, setSearchedItem, setFoundItem , foundItem, getItem} = useContext(ShopContext);

    const navigate = useNavigate();




    const findItem =(e) => {
        e.preventDefault()
        let item = getItem(searchedItem)
        setFoundItem(item.name)
        navigate(`/store/${item.name}`)
        console.log('ffff',foundItem);
        setSearchedItem('')
        // setFoundItem(null)
    }

    return (
        <form className="search" onSubmit={findItem}>
            <input 
                onChange={(e)=> setSearchedItem(e.target.value)}
                type = 'text' 
                value = {searchedItem}
                placeholder= '🔍'
            
            />
        </form>
    )
}

export default Search