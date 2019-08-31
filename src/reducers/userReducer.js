import {
  LOAD_ALL_USERS,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAIL,
  LOAD_LOGGED_USER,
  LOAD_LOGGED_USER_SUCCESS,
  LOAD_LOGGED_USER_FAIL,
  LOADING,
  GET_TOKEN
} from "../constants/userConstant";

const INITIAL_STATE = {
  logged_user: null,
  users: null,
  loading: false,
  error: "",
  token: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: "" };
    case GET_TOKEN:
      return { ...state, token: action.payload };
    case LOAD_LOGGED_USER_SUCCESS:
      return {
        ...state,
        logged_user: action.payload,
        error: "",
        loading: false
      };

    default:
      return { ...state };
  }
}
