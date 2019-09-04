import {
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL
} from "../constants/userConstant";

const INITIAL_STATE = {
  logged_user: null,
  users: null,
  loading: true,
  loading_update_user: false,
  error: "",
  token: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_LOGGED_USER:
      return { ...state, loading: true, error: "" };
    case LOAD_LOGGED_USER_SUCCESS:
      return {
        ...state,
        logged_user: action.payload,
        error: "",
        loading: false
      };
    case LOAD_LOGGED_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        logged_user: null
      };
    case UPDATE_USER_PROFILE:
      return { ...state, loading_update_user: true, error: "" };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        logged_user: action.payload,
        error: "",
        loading_update_user: false
      };
    case UPDATE_USER_PROFILE_FAIL:
      return { ...state, error: action.payload, loading_update_user: false };
    default:
      return { ...state };
  }
}
