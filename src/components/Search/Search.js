// Hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Contexts
import { ShopContext } from '../../context/ShopContext';

// Styles
import './Search.css'

function Search() {

   // Shop Context Variables
    const {
        searchedItem, 
        setSearchedItem, 
        setFoundItem , 
        getItem
    } = useContext(ShopContext);

    // Hook Variables
    const navigate = useNavigate();

    // Find Searched Item
    const findItem =(e) => {
        e.preventDefault();
        let item = getItem(searchedItem);
        setFoundItem(item.name);
        navigate(`/store/${item.name}`);
        setSearchedItem('');
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