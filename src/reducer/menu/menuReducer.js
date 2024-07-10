// alertReducer.js
const initialState = {
    all_menu_data: null,
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ALL_MENU_DATA":
        return {
          ...state,
          all_menu_data: action.payload,
        };
      case "CLEAR_ALL_MENU_DATA":
        return {
          ...state,
          all_menu_data: null,
        };
        
      default:
        return state;
    }
  };
  
  export default menuReducer;
  