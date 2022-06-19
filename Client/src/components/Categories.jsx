import '../sass/categories.scss';
import { useSelector } from 'react-redux';
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom';
const Categories = () => {
    const state = useSelector((state) => state.reducerA.headerModule);
    return <div className='categories' style={{ height: state ? "65vh" : "0" }}>
        <ul style={{ display: state ? "block" : "none" }}>
            <li>
                <Link to="/#trending">Trending Products <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#software">SoftWare <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#cards">Gaming Gift Cards <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#cards">Top Up Cards <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#xbox">Xbox <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#playstation">Playstation <IoMdArrowDropright /></Link>
            </li>
            <li>
                <Link to="/#importantProducts">Pre-Orders</Link>
            </li>
            <li>
                <Link to="/#importantProducts">Latest releases</Link>
            </li>
        </ul>
    </div>
};
export default Categories;