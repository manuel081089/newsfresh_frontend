import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";

export function getItem(id, modelUrl) {}

export async function updateItem(item, modelUrl) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.put(`${API_URL}/api/${modelUrl}/${item.id}`, item);
  } catch (error) {
    return error;
  }
}
