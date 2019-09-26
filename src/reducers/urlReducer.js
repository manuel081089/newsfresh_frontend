import * as urlConstant from "../constants/urlConstant";

const INITIAL_STATE = {
  urls: null,
  categories: null,
  loading: true,
  loadingAddRequest: false,
  error: "",
  selectedUrl: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case urlConstant.LOAD_LOGIN_USER_URL:
      return {
        ...state,
        loading: true,
        error: "",
        selectedUrl: null,
        loadingAddRequest: true
      };
    case urlConstant.LOAD_LOGIN_USER_URL_SUCCESS:
      return {
        ...state,
        urls: action.payload,
        error: "",
        loading: false,
        selectedUrl: null,
        loadingAddRequest: false
      };
    case urlConstant.LOAD_LOGIN_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        urls: null,
        selectedUrl: null
      };
    case urlConstant.ADD_USER_URL:
      return { ...state, loadingAddRequest: true, error: "", loading: true };
    case urlConstant.ADD_USER_URL_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        loadingAddRequest: false,
        selectedUrl: null
      };
    case urlConstant.ADD_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingAddRequest: false,
        selectedUrl: null
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
        loading: false,
        selectedUrl: null
      };
    case urlConstant.REMOVE_USER_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        selectedUrl: null
      };
    case urlConstant.LOAD_EDIT_URL:
      return {
        ...state,
        selectedUrl: action.payload,
        loading: false
      };
    case urlConstant.CLEAR_SELECTED_URL:
      return {
        ...state,
        selectedUrl: null
      };
    case urlConstant.CHANGE_VALUE_SELECTED_URL:
      return {
        ...state,
        selectedUrl: {
          ...state.selectedUrl,
          [action.payload.field]: action.payload.value
        }
      };
    case urlConstant.CHANGE_VALUE_CATEGORY_URL:
      return {
        ...state,
        selectedUrl: {
          ...state.selectedUrl,
          categoria: action.payload
        }
      };
    case urlConstant.UPDATE_URL:
      return { ...state, loadingAddRequest: true, error: "", loading: true };
    case urlConstant.UPDATE_URL_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        loadingAddRequest: false
      };
    case urlConstant.UPDATE_URL_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingAddRequest: false,
        selectedUrl: null
      };
    default:
      return { ...state };
  }
}
