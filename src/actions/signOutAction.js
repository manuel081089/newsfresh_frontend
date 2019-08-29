import { UNAUTHENTICATED } from "../constants/loginConstants";

export function signOutAction(history) {
  localStorage.clear();
  console.log("log out");
  return {
    type: UNAUTHENTICATED
  };
}
