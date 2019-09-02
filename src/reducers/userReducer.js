import {
  LOAD_ALL_USERS,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL
} from "../constants/userConstant";

const INITIAL_STATE = {
  logged_user: null,
  users: null,
  loading: true,
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
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
}
