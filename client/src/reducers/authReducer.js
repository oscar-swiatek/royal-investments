import {
  USER_LOADED,
  USER_LOADING,
  USER_LOADED_ADMIN,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_SUCCESS_ADMIN,
  LOGIN_FAIL,
  LOGIN_FAIL_ADMIN,
  LOGOUT_SUCCESS,
  LOGOUT_SUCCESS_ADMIN,
  REGISTER_SUCCESS,
  REGISTER_SUCCESS_ADMIN,
  REGISTER_FAIL,
  REGISTER_FAIL_ADMIN
} from "../actions/types";

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isAdmin: false,
  isLoading: false,
  user: null
};
 
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case USER_LOADED_ADMIN:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGIN_SUCCESS_ADMIN:
    case REGISTER_SUCCESS_ADMIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isAdmin: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    case LOGIN_FAIL_ADMIN:
    case LOGOUT_SUCCESS_ADMIN:
    case REGISTER_FAIL_ADMIN:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        isLoading: false
      };
    default:
      return state;
  }
}
