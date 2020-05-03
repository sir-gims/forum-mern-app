import {
    REGISTER_FAIL,
    AUTH_ERROR,
    CREATE_THREAD,
    CREATE_COMMENT,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOAD_THREADS,
    READ_THREAD
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case LOAD_THREADS:
        return {
          ...state,
          loading: false,
          threads: action.payload
        }
      case CREATE_THREAD:
      case CREATE_COMMENT:
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
      case READ_THREAD:
        return {
          ...state,
          loading: false,
          current: action.payload
        }
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  