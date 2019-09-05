import {
  LOAD_LOGIN_USER_URL,
  LOAD_LOGIN_USER_URL_SUCCESS,
  LOAD_LOGIN_USER_URL_FAIL
} from "../constants/urlConstant";
import * as urlService from "../Services/urlService";

export function loadUserUrl() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_LOGIN_USER_URL });
      const res = await urlService.getUserUrl();
      dispatch({ type: LOAD_LOGIN_USER_URL_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: LOAD_LOGIN_USER_URL_FAIL, payload: error });
    }
  };
}
