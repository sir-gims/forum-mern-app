import React, { Fragment,useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const {logout , isAuthenticated, user} = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
       <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/edit-data'>Edit Profile</Link>
      </li>
      <li>
        <Link to='/change-password'>Change password</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>   
      <li>
        <a onClick={onLogout} href="#!">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </Fragment>
  );

    return (
    <Fragment>
  <nav className="teal darken-3">
    <div className="nav-wrapper">
      <span className="brand-logo push-s2"></span>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <a href="#!" class="brand-logo">ζforum</a>
    <ul class="right hide-on-med-and-down">
      {isAuthenticated ? authLinks : guestLinks}
    </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    {isAuthenticated ? authLinks : guestLinks}
  </ul>
    </Fragment>
    )
}


export default Navbar;
