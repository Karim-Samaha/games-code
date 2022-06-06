import { showMoreTrending, singleProduct } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const Software = () => {
    const moreState = useSelector((state) => state.reducerA.software)
    const softwareProducts = useSelector((state) => state.reducerA.productsData)
        .filter((item) => item.category == "software");
    const dispatch = useDispatch();
    const myRef = useRef()
    useEffect(() => {
        if (window.innerWidth <= 750) {
            dispatch(showMoreTrending("more", "software"))
        }
    }, [])
    useEffect(() => {
        if (window.location.href.split("/")[3] == '#software') {
            myRef.current.scrollIntoView()
        }
    }, [useLocation()])
    return <section ref={myRef} id='software' className="container">
        <div className="header">
            <h2>Best Software Products</h2>
            <p>
                From methods of protecting your PC to software useful in your professional life,
                you'll find it all here at attractive prices.
            </p>
            <button>Discover All</button>
        </div>
        <div className="trendingProducts">
            {moreState ? softwareProducts.map((item) => {
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
                : softwareProducts.slice(0, 6).map((item) => {
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
            <span onClick={() => dispatch(showMoreTrending("less", "software"))}>
                Show Less
            </span>
            :
            <span onClick={() => dispatch(showMoreTrending("more", "software"))}>
                Show More
            </span>}

    </section>
}
export default Software;