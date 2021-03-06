import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CHANGE_DATA,
    UPLOAD_PROFILE_PIC,
    CHANGE_PASSWORD,
    LOGOUT,
    CLEAR_ERRORS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case USER_LOADED:
      case CHANGE_DATA:
      case UPLOAD_PROFILE_PIC:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
      case CHANGE_PASSWORD:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          loading: false
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  