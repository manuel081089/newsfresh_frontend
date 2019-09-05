import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";

export async function getUserUrl() {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.get(`${API_URL}/api/url_login_user`);
  } catch (error) {
    return error;
  }
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
  }); // use arr as this

  return result;
}
