import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Home = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user} = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user.name);
      
    }

    // eslint-disable-next-line
  }, [isAuthenticated,props.history]);


    return (
        <Fragment>
        <h1 className="center-align">hello {user && user.name}</h1>
      </Fragment>
    )
}

export default Home
