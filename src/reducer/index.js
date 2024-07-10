import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AlertReducer from "./Activity/alertReducer";
import UserReducer from "./user/userReducer";
import TableReducer from './table/tableReducer';


import MenuReducer from "./menu/menuReducer";


const rootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    alert: AlertReducer,
    user: UserReducer,
    table: TableReducer,
    menu: MenuReducer,
  });

export default rootReducer;