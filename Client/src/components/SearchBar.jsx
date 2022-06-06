import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { searchValue } from '../redux/action';
import { Link } from 'react-router-dom';
const SearchBar = () => {
    const data = useSelector((state) => state.reducerA.productsData);
    const searchData = useSelector((state) => state.reducerA.searchData)
    const searchValueState = useSelector((state) => state.reducerA.searchValue)
    const dispatch = useDispatch();
    return <div className="searchBar">
        <input value={searchValueState} onChange={(e) => dispatch(searchValue(e.target.value, data))}
            type="text" placeholder="search for products" />
        <AiOutlineSearch />
        <div style={{ display: searchValueState.length > 0 ? "block" : "none" }}
            className='searchOutput'>
            {searchData.map((item) => {
                const { name, img, id } = item;
                return <div key={id} className='searchItem'>
                    <img src={`/${img}`} alt={name} />
                    <h2>{name}</h2>
                    <Link
                        to={`/product/${id}`}>
                    </Link>
                </div>
            })
            }
        </div>
    </div>
}
export default SearchBar;

