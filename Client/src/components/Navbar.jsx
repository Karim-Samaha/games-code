import '../sass/nav.scss';
import { AiOutlineBars } from 'react-icons/ai'
import { BsFillPersonFill, BsCartFill } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openHeaderModule, toggleSidebar, openLogingModule } from '../redux/action'
import Categories from './Categories';
import SearchBar from './SearchBar';

const Navbar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducerA);
    const loginStatus = useSelector((state) => state.reducerB.loginStatus);
    const userName = useSelector((state) => state.reducerB.loginInfo.name);
    return <nav>
        <div className="logo">
            <AiOutlineBars onMouseLeave={() => dispatch(toggleSidebar())}
                onClick={() => dispatch(toggleSidebar())}
                className='sidbarOpen' />
            <h2>
                <Link to="/"></Link>
                <span className='yellow'>Game</span>
                <span className='blue'>Station</span>
            </h2>
        </div>
        <SearchBar />
        <div className="navOptions">
            {loginStatus && userName ? <h2 className='username'>{userName}</h2> : <BsFillPersonFill onClick={() => dispatch(openLogingModule())} />}
            <Link to="/cart"><BsCartFill />
                <span>{state.cart.length}</span>
            </Link>
        </div>
        <div className={(window.innerWidth) > 750 ? "navBottom"
            : window.innerWidth <= 750 && state.sidebarModule ? "navBottom smallScreenOpen"
                : "navBottom smallScreenClosed"}>
            <div onClick={() => dispatch(openHeaderModule())}
                className='sectionOne'>
                <AiOutlineBars />
                <h3>Categories</h3>
                <IoMdArrowDropdown className='arrowDown' />
            </div>
            <div className='sectionTwo'>
                <Link to="/#software">Software</Link>
            </div>
            <div className='sectionThree'>
                <Link to="/#importantProducts">BestSellers</Link>
            </div>
            <div className='sectionFour'>
                <a href="#">Support Ukraine</a>
            </div>
            <div className='sectionFive'>
                <Link to="/#playstation">PlayStation</Link>
            </div>
            <div className='sectionSix'>
                <Link to="/#xbox">XBOX</Link>
            </div>
            <Categories />
        </div>
    </nav>
}
export default Navbar;