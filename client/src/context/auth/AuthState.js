import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHANGE_DATA,
  CHANGE_PASSWORD,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
   if (localStorage.token) {
     setAuthToken(localStorage.token);
   }
   
    try {
      const res = await axios.get('/api/v1/users/me');

      dispatch({type: USER_LOADED, payload: res.data.data.data})
    } catch (err) {
      dispatch({type:AUTH_ERROR})
    }
  }

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/v1/users/signup', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/v1/users/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  //change password
  const changePassword = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.patch('api/v1/users/updateMyPassword', formData, config);

      dispatch({
        type: CHANGE_PASSWORD,
        payload: res.data
      });
      logout();    
    } catch (err) {
      console.log(err.response);
    }
  };
  // change user's data
  const changeData = async formData => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };

    try {
      const res = await axios.patch('api/v1/users/updateMe', formData);
      // {{URL}}api/v1/users/updateMe
      dispatch({
        type: CHANGE_DATA,
        payload: res.data.data.user
        // payload: res.data
      });
      // logout();    
    } catch (err) {
      console.log(err.response);
    }
  };

  // Logout
  const logout = async () => {
    // {{URL}}api/v1/users/logout
    try {
      const res = await axios.get('/api/v1/users/logout');
      if ((res.data.status = 'success')) {
        // location.reload(true);
        dispatch({type: LOGOUT});
      } 
      
    } catch (err) {
      console.log(err.response);
      
    }
  }

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        changeData,
        changePassword,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
