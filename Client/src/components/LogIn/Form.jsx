import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from 'react-icons/ai'
import { openLogingModule } from "../../redux/action";
import Login from "./Login";
import Signin from "./SginIn";
const LoginForm = () => {
    const loginState = useSelector((state) => state.reducerB.loginModule)
    const signinState = useSelector((state) => state.reducerB.signinModule);
    const dispatch = useDispatch()
    return <section style={{ display: loginState ? "block" : "none" }} className="loginForm">
        <AiOutlineClose className="closeIcon" onClick={() => dispatch(openLogingModule())} />
        {signinState ? <Signin /> : <Login />}
    </section>
}

export default LoginForm;