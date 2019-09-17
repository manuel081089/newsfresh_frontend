import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export async function getUserUrl() {
  try {
    //Function that will be called to refresh authorization
    const refreshAuthLogic = failedRequest =>
      axios
        .post(`${API_URL}/api/login`, {
          email: localStorage.getItem("email"),
          password: localStorage.getItem("password")
        })
        .then(tokenRefreshResponse => {
          localStorage.setItem("token", tokenRefreshResponse.data.token);
          authService.setDefaultHeaderAxiosRequest(
            tokenRefreshResponse.data.token
          );
          // failedRequest.response.config.headers["Authentication"] =
          //   "Bearer " + tokenRefreshResponse.data.token;
          return Promise.resolve();
        });
    authService.setDefaultHeaderAxiosRequest(authService.token());
    createAuthRefreshInterceptor(axios, refreshAuthLogic);
    return await axios.get(`${API_URL}/api/url_login_user`);
  } catch (error) {}
}

export function transformValuesToTableData(values) {
  let auxArray = [];
  values.map(value => {
    return auxArray.push(Object.values(value));
  });
  let result = [];
  auxArray.map(itemArray => {
    return result.push(
      itemArray.filter(
        (item, index) => index === 1 || index === 2 || index === 4
      )
    );
  });
  result.forEach(function(part, index) {
    part[2] = part[2].toString();
  });

  return result;
}
