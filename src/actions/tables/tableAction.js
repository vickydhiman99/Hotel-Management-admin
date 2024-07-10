import Api from "../../utils/Api";

export const createTable = (tabledata) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('create_new_table', tabledata);
            
            const tableResData = response?.data
            // console.log(response.data,'<<<response.data');
            if (tableResData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: tableResData.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: tableResData.message
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


export const getAllTable = (tabledata) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('get_all_table', tabledata);
            
            const tableResData = response?.data
            // console.log(response.data,'<<<response.data');
            if (tableResData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: tableResData?.message
                    }
                })
                dispatch({
                    type: 'SET_ALL_TABLE_DATA',
                    payload: tableResData?.data
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: tableResData?.message
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


export const deteleTable = (tabledata) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('delete_table', tabledata);
            
            const tableResData = response?.data
            // console.log(response.data,'<<<response.data');
            if (tableResData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: tableResData?.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: tableResData?.message
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
export const editTable = (tabledata) => {
    return async (dispatch) => {
        try {

            const response = await Api.post('table_update', tabledata);
            
            const tableResData = response?.data
            // console.log(response.data,'<<<response.data');
            if (tableResData.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "success",
                        message: tableResData?.message
                    }
                })
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: "error",
                        message: tableResData?.message
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