import Api from "../../utils/Api";

export const createMenu = (menuData) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('create_food', menuData);
            
            const menusData = response?.data
            // console.log(response.data,'<<<response.data');
            if (menuData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message:menusData.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message:menusData.message
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


export const getAllMenu = (menuData) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('get_all_food', menuData);
            
            const menusData = response?.data
            // console.log(response.data,'<<<response.data');
            if (menusData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: menusData?.message
                    }
                })
                dispatch({
                    type: 'SET_ALL_MENU_DATA',
                    payload: menusData?.data
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: menusData?.message
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


export const deteleMenu = (menuData) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('delete_table', menuData);
            
            const menusData = response?.data
            // console.log(response.data,'<<<response.data');
            if (menusData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: menusData?.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: menusData?.message
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
export const editMenu = (menuData) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('table_update', menuData);
            
            const menusData = response?.data
            // console.log(response.data,'<<<response.data');
            if (menusData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: menusData?.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: menusData?.message
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