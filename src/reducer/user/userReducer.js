// alertReducer.js
const initialState = {
    // allUsers: [],
    userData: {},
    token: '',
    loginData: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER_DATA":
            return {
                ...state,
                loginData: {
                    token: action.payload.token,
                    userData: action.payload.userdata
                }

            };
        case "CLEAR_USER_DATA":
            return {
                ...state,
                loginData: null
            };
        default:
            return state;
    }
};

export default userReducer;