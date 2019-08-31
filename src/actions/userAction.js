import axios from "axios";
import {
  LOAD_ALL_USERS,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL,
  LOADING
} from "../constants/userConstant";
import { API_URL } from "../constants/envirementConstant";

export function loadLoggedUser() {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.get(`${API_URL}/api/showAuthenticate`);
      dispatch({ type: LOAD_LOGGED_USER_SUCCESS, payload: res.data });
    } catch (error) {}
  };
}
