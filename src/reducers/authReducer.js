import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOADING
} from "../constants/loginConstants";

const INITIAL_STATE = {
  error: "",
  authenticated: false,
  email: "",
  password: "",
  show_password: false,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: "" };
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
        error: ""
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        error: "",
        email: "",
        password: ""
      };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload, loading: false };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return { ...state };
  }
}
