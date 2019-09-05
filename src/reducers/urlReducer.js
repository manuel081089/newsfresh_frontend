import {
  LOAD_LOGIN_USER_URL,
  LOAD_LOGIN_USER_URL_SUCCESS,
  LOAD_LOGIN_USER_URL_FAIL
} from "../constants/urlConstant";

const INITIAL_STATE = {
  urls: null,
  loading: true,
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_LOGIN_USER_URL:
      return { ...state, loading: true, error: "" };
    case LOAD_LOGIN_USER_URL_SUCCESS:
      return {
        ...state,
        urls: action.payload,
        error: "",
        loading: false
      };
    case LOAD_LOGIN_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        urls: null
      };
    default:
      return { ...state };
  }
}
