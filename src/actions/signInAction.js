import axios from "axios";
import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOADING
} from "../constants/loginConstants";

const URL = "http://localhost:8000";

export function signInAction(signInData, history) {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.post(`${URL}/api/login`, signInData);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data.token);
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
