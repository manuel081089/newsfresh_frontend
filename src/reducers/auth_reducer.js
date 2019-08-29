import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_SHOW_PASSWORD,
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
        email: "",
        password: "",
        loading: false
      };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload, loading: false };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case CHANGE_SHOW_PASSWORD:
      return { ...state, show_password: !state.show_password };
    default:
      return { ...state };
  }
}
