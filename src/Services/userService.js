import axios from "axios";
import { API_URL } from "../constants/envirementConstant";

export async function getLoggedUser() {
  try {
    const token = localStorage.getItem("user");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    return await axios.get(`${API_URL}/api/showAuthenticate`, config);
  } catch (error) {
    throw error;
  }
}
