import axios from "axios";
import {
  LOAD_ALL_USERS,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL
} from "../constants/userConstant";
import * as userService from "../Services/userService";

export function loadLoggedUser() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_LOGGED_USER });
      const res = await userService.getLoggedUser();
      dispatch({ type: LOAD_LOGGED_USER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOAD_LOGGED_USER_FAIL, payload: error });
    }
  };
}
