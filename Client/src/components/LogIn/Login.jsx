import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openSigninModule, loginUsername, loginPassword, loginInfo, openLogingModule, login } from "../../redux/action";

const Login = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.reducerB.loginUsername)
    const password = useSelector((state) => state.reducerB.loginPassword)
    const userinfo = useSelector((state) => state.reducerB.loginInfo)
    const loginStatus = useSelector((state) => state.reducerB.loginStatus)
    const [info, setInfo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginInfo(userName, password))
    }

    useEffect(() => {
        const login = async (url, user) => {
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const content = await rawResponse.text();
            console.log(content)
            setInfo(content)
        }
        login("https://gamesk.herokuapp.com/user/login", userinfo)
    }, [userinfo])
    useEffect(() => {
        dispatch(login(info))
    }, [info])
    useEffect(() => {
        if (loginStatus) {
            setTimeout(() => {
                dispatch(openLogingModule())
            }, 3000)
        }
    }, [loginStatus])
    if (loginStatus) {
        return <section className="login">
            <h2>Welcome {userName}</h2>
        </section>
    }
    return <section className="login">
        <h2>Log In</h2>
        <h4>Login with your username and password</h4>
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={(e) => dispatch(loginUsername(e))} required type="text" placeholder="Username" />
            <input value={password} onChange={(e) => dispatch(loginPassword(e))} required type="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </form>
        <p>{info == "Wrong Password" ? "Wrong Password" : ""}</p>

        <div className="loginBottom">
            <Link to="#">Forget Password</Link>
            <button onClick={() => dispatch(openSigninModule())}>Sign Up</button>
        </div>
    </section>
}

export default Login