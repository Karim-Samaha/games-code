import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { setCart } from "../redux/action";
import { singleProduct } from "../redux/action";
import { loading, searchValue } from "../redux/action";
const SingleProductPage = () => {
    const loadingState = useSelector((state) => state.reducerA.loading);
    const data = useSelector((state) => state.reducerA.spicificProduct);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { pathname } = useLocation();
    useEffect(() => {
        const fetchSingleProductData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(singleProduct(data))
            dispatch(loading("false"))
        }
        fetchSingleProductData(`https://gamesk.herokuapp.com/products/${id}`)
        dispatch(searchValue("", []))
    }, [pathname])
    if (loadingState) {
        return <h2>Loading....</h2>
    }
    return <section className="singleProduct" key={id}>
        <div>
            <img src={`../${data[0].img}`} alt={data[0].name} />
        </div>
        <div>
            <h2>{data[0].name}</h2>
        </div>
        <div>
            <h4>Price</h4>
            <p>${data[0].price}</p>
            <p className="oldPrice">${data[0].oldPrice}</p>
            <span>
                {(100 - (data[0].price / data[0].oldPrice) * (100)).toString().substring(0, 2)}%OFF
            </span>
            <button onClick={() => dispatch(setCart())}>Add To Cart</button>
        </div>
    </section>
}

export default SingleProductPage;