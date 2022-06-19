import '../sass/products-2.scss';
import { useSelector } from 'react-redux'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
const Cards = () => {
    const products = useSelector((state) => state.reducerA.productsData)
    .filter((item) => item.category == "cards");
    const myRef = useRef();
    useEffect(() => {
        if (window.location.href.split("/")[4] == '#cards') {
            myRef.current.scrollIntoView()
        }
    }, [useLocation()])
    const returnProducts = (x, y) => {
        return products.slice(x, y).map((item) => {
            const { id, img, name, price, oldPrice } = item;
            return <div key={id} className="productItem">
                <img src={img} alt={name} />
                <div className="info">
                    <h2>{name}</h2>
                    <h3>{price}$</h3>
                    <h3 className="oldPrice">{+oldPrice + 10}$</h3>
                    <Link
                        to={`/product/${id}`}>
                    </Link>
                </div>
            </div>
        })
    }
    return <section ref={myRef} id="cards" className="rowContainers">
        <div className="sectionOne">
            <h2>STEAM CARDS</h2>
            <p>Browse the most popular video games & other products.</p>
            <div className="products">
                {returnProducts(0, 6)}
            </div>
        </div>
        <div className="sectionTwo">
            <h2>PSN Cards</h2>
            <p>Update your library with the latest game releases.</p>
            <div className="products">
                {returnProducts(6, 12)}
            </div>
        </div>
        <div className="sectionThree">
            <h2>XBOX Cards</h2>
            <p>Pre-order an upcoming game to start playing on Day 1.</p>
            <div className="products">
                {returnProducts(12, 18)}
            </div>
        </div>
    </section>
}

export default Cards;