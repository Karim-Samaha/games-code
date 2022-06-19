import '../../sass/login.scss';
import { useEffect, useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { openSigninModule, signupUsername, signupEmail, signupPassword, signupInfo, signup } from '../../redux/action'
const Signin = () => {


    const userName = useSelector((state) => state.reducerB.signinUsername)
    const email = useSelector((state) => state.reducerB.signinEmail)
    const password = useSelector((state) => state.reducerB.signinPassword)
    const userInfo = useSelector((state) => state.reducerB.signupUserInfo)
    const signupStatus = useSelector((state) => state.reducerB.signupStatus)
    const [res, setRes] = useState({})
    const [signinResponse, setSigninResponse] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupInfo(userName, email, password))
    }

    useEffect(() => {
        const apifunction = async (url, user) => {
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const content = await rawResponse.json();
            setRes(content)

        }
        apifunction("https://gamesk.herokuapp.com/user", userInfo)

    }, [userInfo])
    useEffect(() => {
        if (res.hasOwnProperty("email")) {
            dispatch(signup())
        } else if (res.hasOwnProperty("msggg")) {
            setSigninResponse("Error")
        }
    }, [res])
    const dispatch = useDispatch();
    if (signupStatus) {
        return <section style={{ justifyContent: "center" }} className="signup">
            <h2>Signed Up Successfully</h2>
            <h3 onClick={() => dispatch(openSigninModule())} className="loginAfterSignup">Sign In</h3>
        </section>
    }
    return <section className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={(e) => dispatch(signupUsername(e))} required type="text" placeholder="Username" />
            <input value={email} onChange={(e) => dispatch(signupEmail(e))} required type="text" placeholder="Email adress" />
            <input value={password} onChange={(e) => dispatch(signupPassword(e))} required type="password" placeholder="Password" />
            <input type="submit" value="Sign Up" />
        </form>
        {signinResponse == "Error" ? <div>
            <p>{signinResponse}</p>
            <ul>
                <li>Enter a vaild Email Adress</li>
                <li>Make sure you didnt Sign in with that Email Before</li>
            </ul>
        </div> : ""}
        <span className='back' onClick={() => dispatch(openSigninModule())}>
            <MdKeyboardBackspace />
            back
        </span>
    </section>
}

export default Signin