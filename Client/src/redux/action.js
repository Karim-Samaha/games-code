import actionType from "./actionType";

export const productsData = (data) => {
    return {
        type: actionType.PRODUCTSDATA,
        payload: {
            data: data
        }
    }
}

export const openHeaderModule = () => {
    return {
        type: actionType.OPENHEADERMOUDLE,
    }
}

export const showMoreTrending = (event, ctg) => {
    return {
        type: actionType.SHOWMORETRENDING,
        payload: {
            event: event,
            ctg: ctg
        }
    }
}

export const singleProduct = (data) => {
    return {
        type: actionType.SINGLEPRODUCT,
        payload: {
            data: data
        }
    }
}
export const setCart = () => {
    return {
        type: actionType.SETCART
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionType.REMOVEFOMCART,
        payload: {
            id: itemId
        }
    }
}
export const setQty = (value, itemId) => {
    return {
        type: actionType.SETQNTY,
        payload: {
            id: itemId,
            value: value
        }
    }
}

export const toggleSidebar = () => {
    return {
        type: actionType.OPENSIDEBAR
    }
}
export const searchValue = (value, data) => {
    return {
        type: actionType.SEARCHVALUE,
        payload: {
            text: value,
            data: data
        }
    }
}

export const loading = (status) => {
    return {
        type: actionType.LOADING,
        payload: {
            status: status
        }
    }
}

//User Reducer Actions

export const openLogingModule = () => {
    return {
        type: actionType.OPENLOGINMOUDLE
    }
}
export const openSigninModule = () => {
    return {
        type: actionType.OPENSIGNINMOUDLE
    }
}
export const loginUsername = (e) => {
    return {
        type: actionType.LOGINUSERNAME,
        payload: {
            value: e.target.value
        }
    }
}
export const loginPassword = (e) => {
    return {
        type: actionType.LOGINPASSWORD,
        payload: {
            value: e.target.value
        }
    }
}

export const loginInfo = (user, pass) => {
    return {
        type: actionType.SUBMITLOGININFO,
        payload: {
            username: user,
            password: pass
        }
    }
}

export const login = (response) => {
    return {
        type: actionType.LOGIN,
        payload: {
            response: response
        }
    }
}

export const signupUsername = (e) => {
    return {
        type: actionType.SIGNUPUSERNAME,
        payload: {
            username: e.target.value
        }
    }
}
export const signupEmail = (e) => {
    return {
        type: actionType.SIGNUPEMAIL,
        payload: {
            email: e.target.value
        }
    }
}
export const signupPassword = (e) => {
    return {
        type: actionType.SIGNUPPASSWORD,
        payload: {
            password: e.target.value
        }
    }
}

export const signupInfo = (name, email, pass) => {
    return {
        type: actionType.SIGNUPUSERINFO,
        payload: {
            name: name,
            email: email,
            password: pass
        }
    }
}

export const signup = () => {
    return {
        type: actionType.SIGNUPSTATUS
    }
}
