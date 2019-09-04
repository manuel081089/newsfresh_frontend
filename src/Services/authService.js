import axios from "axios";

export function setDefaultHeaderAxiosRequest(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}

export const islogged = () => {
  return localStorage.getItem("user") ? true : false;
};

export const token = () => {
  return localStorage.getItem("user");
};
