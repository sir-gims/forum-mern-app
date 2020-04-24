import React, { Fragment,useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const {logout , isAuthenticated, user} = authContext;

  const onLogout = () => {
    logout();
  };

    return (
    <Fragment>
    <ul id="dropdown1" class="dropdown-content">
      <li>
        <Link to='/profile'>Profile</Link>
      </li>   
      <li>
        <Link to='/edit-data'>Edit Profile</Link>
      </li>
      <li>
        <Link to='/change-password'>Change password</Link>
      </li>
    </ul>
  <nav className="teal darken-3">
    <div className="nav-wrapper">
      <span className="brand-logo push-s2"></span>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <a href="#!" class="brand-logo">ζforum</a>
    <ul class="right hide-on-med-and-down">
      <li>
        <a onClick={onLogout} href="#!">
          Logout
        </a>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>

      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Profile<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/profile'>Profile</Link>
    </li>
    <li>
      <Link to='/login'>Login</Link>
    </li>
    <li>
      <Link to='/register'>Register</Link>
    </li>
    <li>
      <Link to='/edit-data'>Edit Profile</Link>
    </li>
    <li>
      <Link to='/change-password'>Change password</Link>
    </li>
    <li>
        <a onClick={onLogout} href="#!">
          Logout
        </a>
      </li>
  </ul>
    </Fragment>
    )
}


export default Navbar;
