import actionType from "./actionType";

const INITIALSTATE = {
    loginModule: false,
    signinModule: false,
    loginStatus: false,
    loginUsername: "",
    loginPassword: "",
    loginInfo: {},
    signinUsername: "",
    signinEmail: "",
    signinPassword: "",
    signupUserInfo: {},
    signupStatus: false
}

const userReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        //Login Moudle
        case actionType.OPENLOGINMOUDLE:
            return { ...state, loginModule: !state.loginModule }
            break;
        //Sing in Moudle
        case actionType.OPENSIGNINMOUDLE:
            return { ...state, signinModule: !state.signinModule }
            break;
        //LOGIN
        case actionType.LOGINUSERNAME:
            return { ...state, loginUsername: action.payload.value }
            break;
        case actionType.LOGINPASSWORD:
            return { ...state, loginPassword: action.payload.value }
            break;
        case actionType.SUBMITLOGININFO:
            return {
                ...state,
                loginInfo: {
                    name: action.payload.username,
                    password: action.payload.password
                }
            }
            break;
        case actionType.LOGIN:
            return { ...state, loginStatus: action.payload.response == "Loged In susscess" ? true : false }
            break;
        //Sign in
        case actionType.SIGNUPUSERNAME:
            return { ...state, signinUsername: action.payload.username }
            break;
        case actionType.SIGNUPEMAIL:
            return { ...state, signinEmail: action.payload.email }
            break;
        case actionType.SIGNUPPASSWORD:
            return { ...state, signinPassword: action.payload.password }
            break;
        case actionType.SIGNUPUSERINFO:
            return {
                ...state,
                signupUserInfo: {
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
            break;
        case actionType.SIGNUPSTATUS:
            return { ...state, signupStatus: true }
            break;
        default:
            return state
    }
}

export default userReducer