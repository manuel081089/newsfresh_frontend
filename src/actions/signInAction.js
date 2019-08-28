import axios from "axios";
import {
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL
} from "../constants/loginConstants";

const URL = "http://localhost:8000";

export function signInAction({ email, password }, history) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, { email, password });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data.token);
      history.push("/");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
}

export function cambioEmail(email) {
  return dispatch => {
    dispatch({
      type: CHANGE_EMAIL,
      payload: email
    });
  };
}

// export const cambioEmail = email => dispatch => {
//   dispatch({
//     type: CHANGE_EMAIL,
//     payload: email
//   });
// };
