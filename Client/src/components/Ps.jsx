import '../sass/products-1.scss';
import { showMoreTrending } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const Ps = () => {
    const moreState = useSelector((state) => state.reducerA.ps)
    const psProducts = useSelector((state) => state.reducerA.productsData)
        .filter((item) => item.category == "ps");
    const dispatch = useDispatch();
    const myRef = useRef();
    useEffect(() => {
        if (window.innerWidth <= 750) {
            dispatch(showMoreTrending("more", "ps"))
        }
    }, [])
    useEffect(() => {
        if (window.location.href.split("/")[3] == '#playstation') {
            myRef.current.scrollIntoView()
        }
    }, [useLocation()])
    return <section ref={myRef} id='playstation' className="container">
        <div className="header">
            <h2>Playstation Bestsellers</h2>
            <p>
                Are you still lacking some PlayStation exclusives and want
                to complete your collection? Here you can find them all.
                With us you’ll never overpay for any PlayStation bestseller.
            </p>
            <button>Discover All</button>
        </div>
        <div className="trendingProducts">
            {moreState ? psProducts.map((item) => {
                const { id, img, name, price, oldPrice } = item;
                return <div key={id} className="productItem">
                    <img src={img} alt={name} />
                    <h4>{name}</h4>
                    <h5>{price}$</h5>
                    <h6>{+oldPrice + 25}$</h6>
                    <Link
                        to={`/product/${id}`}>
                    </Link>

                </div>
            })
                : psProducts.slice(0, 6).map((item) => {
                    const { id, img, name, price, oldPrice } = item;
                    return <div key={id} className="productItem">
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                        <h5>{price}$</h5>
                        <h6>{+oldPrice + 25}$</h6>
                        <Link
                            to={`/product/${id}`}>
                        </Link>

                    </div>
                })
            }
        </div>
        {moreState ?
            <span onClick={() => dispatch(showMoreTrending("less", "ps"))}>
                Show Less
            </span>
            :
            <span onClick={() => dispatch(showMoreTrending("more", "ps"))}>
                Show More
            </span>}
    </section>
}
export default Ps;