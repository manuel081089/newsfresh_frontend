import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";

export async function getLoggedUser() {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.get(`${API_URL}/api/showAuthenticate`);
  } catch (error) {
    return error;
  }
}
