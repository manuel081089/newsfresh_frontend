import { UNAUTHENTICATED } from "../constants/loginConstants";

export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
