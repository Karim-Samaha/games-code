import '../sass/products-1.scss';
import { showMoreTrending, singleProduct } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const Trending = () => {
    const moreState = useSelector((state) => state.reducerA.trendingProducts)
    const trendingProducts = useSelector((state) => state.reducerA.productsData)
        .filter((item) => item.category == "trending");

    const dispatch = useDispatch();
    const myRef = useRef();
    useEffect(() => {
        if (window.innerWidth <= 750) {
            dispatch(showMoreTrending("more", "trending"))
        }
    }, [])
    useEffect(() => {
        if (window.location.href.split("/")[3] == '#trending') {
            myRef.current.scrollIntoView()
        }
    }, [useLocation()])
    return <section ref={myRef} id='trending' className="trending container">
        <div className="header">
            <h2>Trending Products</h2>
            <p>
                The best offers, new games, AAA titles and
                high-quality gaming gear. Buy bestselling video games,
                electronics and other accessories in the best deals on the planet.
            </p>
            <button>Discover All</button>
        </div>
        <div className="trendingProducts">
            {moreState ? trendingProducts.map((item) => {
                const { id, img, name, price, oldPrice } = item;
                return <div key={id} className="productItem">
                    <img src={img} alt={name} />
                    <h4>{name}</h4>
                    <h5>{price}$</h5>
                    <h6>{+oldPrice + 10}$</h6>
                    <Link
                        to={`/product/${id}`}>
                    </Link>
                </div>
            })
                : trendingProducts.slice(0, 6).map((item) => {
                    const { id, img, name, price, oldPrice } = item;
                    return <div key={id} className="productItem">
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                        <h5>{price}$</h5>
                        <h6>{+oldPrice + 10}$</h6>
                        <Link
                            to={`/product/${id}`}>
                        </Link>
                    </div>
                })}
        </div>
        {moreState ?
            <span onClick={() => dispatch(showMoreTrending("less", "trending"))}>
                Show Less
            </span>
            : <span onClick={() => dispatch(showMoreTrending("more", "trending"))}>
                Show More
            </span>}
    </section>
}
export default Trending;