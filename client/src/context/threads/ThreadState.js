import React, { useReducer } from 'react';
import axios from 'axios';
import ThreadContext from './threadContext';
import threadReducer from './threadReducer';

import {
  CREATE_THREAD,
  READ_THREAD,
  DELETE_THREAD,
  LOAD_THREADS,
  CLEAR_ERRORS

} from '../types';

const ThreadState = props => {
  const initialState = {
    threads: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(threadReducer, initialState);

  // read thread
  const getThread = async (id) => {
    try {
    // {{URL}}api/v1/threads/:id
      const res = await axios.get(`/api/v1/threads/${id}`);

      dispatch({
        type: READ_THREAD,
        payload: res.data.data.data
      });

    } catch (err) {
      console.log(err.response);

    }
  };
  // create thread
  const createThread = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // {{URL}}api/v1/threads/
    try {
      const res = await axios.post('/api/v1/threads/', formData, config);

      dispatch({
        type: CREATE_THREAD,
        payload: res.data.data.data
      });

    //   loadUser();
    } catch (err) {
      console.log(err.response);
      
    }
  };

  // Load threads
  const loadThreads = async () => {
    try {
    // {{URL}}api/v1/threads/
      const res = await axios.get('/api/v1/threads/');

      dispatch({
        type: LOAD_THREADS,
        payload: res.data.data.data
      });

    } catch (err) {
      console.log(err.response);

    }
  };
  // update thread


  // delete threads
  
  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <ThreadContext.Provider
      value={{
        threads: state.threads,
        current: state.current,
        error: state.error,
        loadThreads,
        getThread,
        createThread,
        clearErrors

      }}
    >
      {props.children}
    </ThreadContext.Provider>
  );
};

export default ThreadState;
