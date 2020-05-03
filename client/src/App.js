import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
// import Home from './components/pages/Home';
import Threads from './components/threads/Threads';
import Profile from './components/users/ProfileCard';
import NewThread from './components/threads/NewThread';
// import CurrentThread from './components/threads/CurrentThread';
import newComment from './components/comments/newComment';
import Comments from './components/comments/Comments';
import ChangeData from './components/auth/ChangeData';
import ChangePassword from './components/auth/ChangePassword';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';

import AuthState from './context/auth/AuthState';
import ThreadState from './context/threads/ThreadState';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  useEffect(() => {
    // Initilaizes Materialize JS
    M.AutoInit();
  });

  return (
    <AuthState>
      <ThreadState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              {/* <Alerts /> */}
              <Switch>
                {/* <PrivateRoute exact path='/home' component={Home} /> */}
                {/* <Route exact path='/home' component={Home} /> */}
                <PrivateRoute exact path='/' component={Threads} />
                <PrivateRoute exact path='/profile' component={Profile} />
                {/* <PrivateRoute exact path='/current' component={CurrentThread} /> */}
                <PrivateRoute exact path='/newThread' component={NewThread} />
                <PrivateRoute exact path='/comments/:id' component={Comments} />
                <PrivateRoute exact path='/newComment' component={newComment} />
                <Route exact path='/about' component={About} />
                <PrivateRoute exact path='/edit-data' component={ChangeData} />
                <PrivateRoute exact path='/change-password' component={ChangePassword} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </ThreadState>
    </AuthState>
  );
}

export default App;
