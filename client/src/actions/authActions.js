import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADED_ADMIN,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_SUCCESS_ADMIN,
  LOGOUT_SUCCESS,
  LOGOUT_SUCCESS_ADMIN,
  LOGIN_FAIL,
  LOGIN_FAIL_ADMIN,
  REGISTER_SUCCESS,
  REGISTER_SUCCESS_ADMIN,
  REGISTER_FAIL,
  REGISTER_FAIL_ADMIN
} from "./types";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      if (res.data.admin) {
        dispatch({
          type: USER_LOADED_ADMIN,
          payload: res.data
        });
      } else {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ name, email, password, adminCode }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password, adminCode });

  axios
    .post("/api/users", body, config)
    .then(res => {
      if (body.adminCode === "45853") {
        dispatch({
          type: REGISTER_SUCCESS_ADMIN,
          payload: res.data
        });
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/api/auth", body, config)
    .then(res => {
      if (body.admin) {
        // window.location.reload();
        console.log("admin");
        dispatch({
          type: LOGIN_SUCCESS_ADMIN,
          payload: res.data
        });
      } else {
        // window.location.reload();
        // console.log(body);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
