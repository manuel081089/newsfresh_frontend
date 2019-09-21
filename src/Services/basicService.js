import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";

export function getItem(id, modelUrl) {}

export async function addItem(item, modelUrl) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.post(`${API_URL}/api/${modelUrl}`, item);
  } catch (error) {
    return error;
  }
}

export async function updateItem(item, modelUrl) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.put(`${API_URL}/api/${modelUrl}/${item.id}`, item);
  } catch (error) {
    return error;
  }
}

export async function getAllItems(modelUrl) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.get(`${API_URL}/api/${modelUrl}`);
  } catch (error) {
    return error;
  }
}

export async function removeItem(modelUrl, index) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.delete(`${API_URL}/api/${modelUrl}/${index}`);
  } catch (error) {
    return error;
  }
}
