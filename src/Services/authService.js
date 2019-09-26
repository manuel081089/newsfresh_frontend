import axios from "axios";
import { API_URL } from "../constants/envirementConstant";

export function setDefaultHeaderAxiosRequest(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}

// Function that will be called to refresh authorization
export async function refreshAuthLogic() {
  const failedRequest = await axios
    .post(`${API_URL}/api/login`, {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password")
    })
    .then(tokenRefreshResponse => {
      localStorage.setItem("token", tokenRefreshResponse.data.token);
      failedRequest.response.config.headers["Authentication"] =
        "Bearer " + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });
}

export const islogged = () => {
  return localStorage.getItem("token") ? true : false;
};

export const token = () => {
  return localStorage.getItem("token");
};
