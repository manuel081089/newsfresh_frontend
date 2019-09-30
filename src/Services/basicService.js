import axios from "axios";
import { API_URL } from "../constants/envirementConstant";
import * as authService from "./authService";

export function getItem(id, modelUrl) {}

export async function addItem(item, modelUrl, signal) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.post(`${API_URL}/api/${modelUrl}`, item, {
      cancelToken: signal.token
    });
  } catch (error) {
    return error;
  }
}

export async function updateItem(item, modelUrl, signal) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.put(`${API_URL}/api/${modelUrl}/${item.id}`, item, {
      cancelToken: signal.token
    });
  } catch (error) {
    return error;
  }
}

export async function getAllItems(modelUrl, signal) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.get(`${API_URL}/api/${modelUrl}`, {
      cancelToken: signal.token
    });
  } catch (error) {
    return error;
  }
}

export async function removeItem(modelUrl, index, signal) {
  try {
    authService.setDefaultHeaderAxiosRequest(authService.token());
    return await axios.delete(`${API_URL}/api/${modelUrl}/${index}`, {
      cancelToken: signal.token
    });
  } catch (error) {
    return error;
  }
}
