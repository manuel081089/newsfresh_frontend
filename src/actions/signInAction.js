import axios from "axios";
import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOADING
} from "../constants/loginConstants";
import { API_URL } from "../constants/envirementConstant";
import { GET_TOKEN } from "../constants/userConstant";

export function signInAction(signInData, history) {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.post(`${API_URL}/api/login`, signInData);
      localStorage.setItem("user", res.data.token);
      dispatch({ type: AUTHENTICATED });
      this.setDefaultHeaderAxiosRequest(res.data.token);
      console.log("modifique el storage::", localStorage);
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

function setDefaultHeaderAxiosRequest(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
