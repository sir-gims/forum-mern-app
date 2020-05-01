import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    CREATE_THREAD,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOAD_THREADS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case LOAD_THREADS:
        return {
          ...state,
          loading: false,
          threads: action.payload
        }
      case REGISTER_SUCCESS:
      case CREATE_THREAD:
        return {
          ...state,
          loading: false,
          ...action.payload
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
  