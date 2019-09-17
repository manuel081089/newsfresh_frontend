import { UNAUTHENTICATED } from "../constants/loginConstants";

export function signOutAction(history) {
  localStorage.removeItem("token");
  return {
    type: UNAUTHENTICATED
  };
}
