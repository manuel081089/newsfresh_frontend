import axios from "axios";
import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOADING
} from "../constants/loginConstants";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "../Services/authService";

export function signInAction(signInData, history) {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.post(`${API_URL}/api/login`, signInData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", signInData.email);
      localStorage.setItem("password", signInData.password);
      dispatch({ type: AUTHENTICATED });
      authService.setDefaultHeaderAxiosRequest(res.data.token);
      history.push("/admin/dashboard");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload:
          "Usuario o contraseña incorrectas, por favor intente de nuevo..."
      });
    }
  };
}

export function changeEmail(email) {
  return dispatch => {
    dispatch({
      type: CHANGE_EMAIL,
      payload: email
    });
  };
}

export function changePassword(password) {
  return dispatch => {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: password
    });
  };
}
