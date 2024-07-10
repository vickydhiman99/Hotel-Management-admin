// alertReducer.js
const initialState = {
  all_table_data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_TABLE_DATA":
      return {
        ...state,
        all_table_data: action.payload,
      };
    case "CLEAR_ALL_TABLE_DATA":
      return {
        ...state,
        all_table_data: null,
      };
      
    default:
      return state;
  }
};

export default userReducer;
