import '../../sass/login.scss';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from 'react-icons/ai'
import { openLogingModule } from "../../redux/action";
import Login from "./Login";
import Signin from "./SginIn";
const LoginForm = () => {
    const loginState = useSelector((state) => state.reducerB.loginModule)
    const signinState = useSelector((state) => state.reducerB.signinModule);
    const dispatch = useDispatch()
    return <div style={{ display: loginState ? "block" : "none" }} className="wrapper">
        <img src="./assets/header-2.jpg" alt="" />
        <img src="./assets/header-1.webp" alt="" />
        <img src="./assets/header-3.webp" alt="" />
        <section className="loginForm">
            <AiOutlineClose className="closeIcon" onClick={() => dispatch(openLogingModule())} />
            {signinState ? <Signin /> : <Login />}
        </section>
    </div>
}

export default LoginForm;