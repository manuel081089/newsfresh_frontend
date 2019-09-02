import axios from "axios";

export function setDefaultHeaderAxiosRequest(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}

export const islogged = () => {
  return localStorage.getItem("user");
};
