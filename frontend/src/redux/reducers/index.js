import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  productReducer,
 
});
export default rootReducer;