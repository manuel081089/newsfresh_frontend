import {
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL
} from "../constants/userConstant";
import * as userService from "../Services/userService";
import * as basicService from "../Services/basicService";

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

export function updateUserProfile(user) {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_USER_PROFILE });
      const res = await basicService.updateItem(user, "user");
      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_PROFILE_FAIL, payload: error });
    }
  };
}
