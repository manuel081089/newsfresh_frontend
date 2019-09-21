import * as urlConstant from "../constants/urlConstant";

const INITIAL_STATE = {
  urls: null,
  categories: null,
  loading: true,
  loadingAddRequest: false,
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case urlConstant.LOAD_LOGIN_USER_URL:
      return { ...state, loading: true, error: "" };
    case urlConstant.LOAD_LOGIN_USER_URL_SUCCESS:
      return {
        ...state,
        urls: action.payload,
        error: "",
        loading: false
      };
    case urlConstant.LOAD_LOGIN_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        urls: null
      };
    case urlConstant.ADD_USER_URL:
      return { ...state, loadingAddRequest: true, error: "", loading: true };
    case urlConstant.ADD_USER_URL_SUCCESS:
      return {
        ...state,
        error: "",
        loadingAddRequest: false
      };
    case urlConstant.ADD_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingAddRequest: false
      };
    case urlConstant.LOAD_CATEGORIES:
      return { ...state, loading: true, error: "" };
    case urlConstant.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: "",
        loading: false
      };
    case urlConstant.LOAD_CATEGORIES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        urls: null
      };

    case urlConstant.REMOVE_USER_URL:
      return { ...state, loading: true, error: "" };
    case urlConstant.REMOVE_USER_URL_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false
      };
    case urlConstant.REMOVE_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return { ...state };
  }
}
