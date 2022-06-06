import { showMoreTrending, singleProduct } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const XboxBestseller = () => {
    const moreState = useSelector((state) => state.reducerA.xbox)
    const xboxProducts = useSelector((state) => state.reducerA.productsData)
        .filter((item) => item.category == "xbox");
    const dispatch = useDispatch();
    const myRef = useRef();
    useEffect(() => {
        if (window.innerWidth <= 750) {
            dispatch(showMoreTrending("more", "xbox"))
        }
    }, [])
    useEffect(() => {
        if (window.location.href.split("/")[3] == '#xbox') {
            myRef.current.scrollIntoView()
        }
    }, [useLocation()])
    return <section ref={myRef} id='xbox' className="container">
        <div className="header">
            <h2>Xbox Bestsellers</h2>
            <p>
                You don’t have to overpay to get up to date with the best and most popular Xbox games.
                Get Xbox bestsellers at attractive prices and never get left behind.
            </p>
            <button>Discover All</button>
        </div>
        <div className="trendingProducts">
            {moreState ? xboxProducts.map((item) => {
                const { id, img, name, price, oldPrice } = item;
                return <div key={id} className="productItem">
                    <img src={img} alt={name} />
                    <h4>{name}</h4>
                    <h5>{price}$</h5>
                    <h6>{oldPrice}$</h6>
                    <Link
                        to={`/product/${id}`}>
                    </Link>

                </div>
            })
                : xboxProducts.slice(0, 6).map((item) => {
                    const { id, img, name, price, oldPrice } = item;
                    return <div key={id} className="productItem">
                        <img src={img} alt={name} />
                        <h4>{name}</h4>
                        <h5>{price}$</h5>
                        <h6>{oldPrice}$</h6>
                        <Link
                            to={`/product/${id}`}>
                        </Link>

                    </div>
                })
            }
        </div>
        {moreState ?
            <span onClick={() => dispatch(showMoreTrending("less", "xbox"))}>
                Show Less
            </span>
            : <span onClick={() => dispatch(showMoreTrending("more", "xbox"))}>
                Show More
            </span>
        }

    </section>
}
export default XboxBestseller;