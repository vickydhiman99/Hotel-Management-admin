import Api from "../../utils/Api";

export const userLogin = (userdata, navigate) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('login', userdata);
            const loginData = response?.data
            console.log(response,'<<<response');
            // console.log(response.data,'<<<response.data');
            if (loginData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: loginData.message
                    }
                })
                dispatch({
                    type: 'ADD_USER_DATA',
                    payload: {
                        token: loginData.token,
                        userdata: loginData.userdata
                    }
                })
                sessionStorage.setItem("token", loginData.token)
                sessionStorage.setItem("userdata",JSON.stringify( loginData.userdata))
                navigate('/')
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: loginData.message
                    }
                })
            }

        }

        catch {
            dispatch({
                type: "ADD_API_ALERT",
                payload: {
                    severity: "error",
                    message: "server error"
                }
            })
        }
    }
}


export const userLogout = (navigate) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "CLEAR_USER_DATA",
            })

            dispatch({
                type: "ADD_API_ALERT",
                payload: {
                    severity: "success",
                    message: "Logout Successfully"
                }
            })
            navigate("/login");
        }

        catch {
            dispatch({
                type: "ADD_API_ALERT",
                payload: {
                    severity: "error",
                    message: "server error"
                }
            })
        }
    }
}