import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL
} from "../constants/loginConstants";

const INITIAL_STATE = {
  error: "",
  authenticated: false,
  email: "",
  password: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return { ...state };
  }
}
