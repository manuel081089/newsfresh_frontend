import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import urlReducer from "./urlReducer";

export default combineReducers({
  authReducer,
  userReducer,
  urlReducer
});
