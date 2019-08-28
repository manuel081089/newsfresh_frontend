import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";

export default combineReducers({
  formReducer,
  authReducer
});
