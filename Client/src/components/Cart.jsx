import '../sass/cart.scss';
import { useDispatch, useSelector } from "react-redux";
import { BiTrash } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { removeFromCart, setQty } from "../redux/action";
const Cart = () => {
    const cartData = useSelector((state) => state.reducerA.cart);
    const dispatch = useDispatch();
    const getTotalPrice = () => {
        var output = 0;
        cartData.map((item) => output += (Number(item.price) * item.qty))
        return output.toString().substring(0, 4);
    }
    const totalItems = () => {
        let output = 0;
        cartData.map((item) => output += Number(item.qty))
        return output
    }
    if (cartData.length <= 0) {
        return (
            <section
                style={{ flexDirection: "column", height: "40vh" }} className="cartSection">
                <h2>Your cart is empty! Go ahead and add some cool stuff to it!</h2>
                <button className="goToHome"><Link to="/"></Link>Go Shoping</button>
            </section>
        )
    }
    const qnty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return <section className="cartSection">
        <div className="carProducts">
            {cartData.map((item) => {
                const { id, name, img, price, oldPrice, qty } = item;
                return <div key={id} className="product">
                    <img src={`./${img}`} alt={name} />
                    <h2>{name}</h2>
                    <div>
                        <select onChange={(e) => dispatch(setQty(e.target.value, id))}>
                            {qnty.map((num, i) => {
                                return <option key={i} value={num}>{num}</option>
                            })}
                        </select>
                        <BiTrash onClick={() => dispatch(removeFromCart(id))} />
                        <div>
                            <h2>{Number(price) * qty}$</h2>
                            {item.qty > 1 ? <p>{price}$ per one</p> : null}
                            <h3>{oldPrice}$</h3>
                            <h4>
                                {(100 - (price / oldPrice) * (100)).toString().substring(0, 2)}%OFF
                            </h4>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className="checkout">
            <input type="text" placeholder="Enter Your Email" id="" />
            <h2>Total Items:<span>{totalItems()}</span></h2>
            <h2>Total Price:<span>{getTotalPrice()}$</span></h2>
            <button>CheckOut</button>
        </div>
    </section>
}

export default Cart;