import React, {Fragment, useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
    // "name": "shoki",
	// "email": "shqoi@programi.io",
	// "password": "pass1234",
    // "passwordConfirm": "pass1234",
    // role

    const authContext = useContext(AuthContext);
    const { isAuthenticated,register, error, clearErrors } = authContext;

    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/');
      }
  
      if (error === 'User already exists') {
        clearErrors();
      }
      // eslint-disable-next-line
    }, [error,isAuthenticated,props.history]);
  
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });

    const { name, email, password, passwordConfirm } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();
      if (name === '' || email === '' || password === '') {
        console.log('pls enterr all fields');
        
      } else if (password !== passwordConfirm) {
        console.log('password does not match');
        
      } else {
        register({
          name,
          email,
          password,
          passwordConfirm
        });
      }
    };

    return (
        <Fragment>
            <div className="row">
            <br/>
            <h1 className="center-align">Register</h1>
    <form onSubmit={onSubmit} className="col s12">
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input placeholder=" "
          name='name'
          value={name}
          onChange={onChange}
          required
          type="text" 
          className="validate"
           />
          <label htmlFor="name">FullName</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="email" type="email"
          value={email}
          onChange={onChange}
          required 
          className="validate"
           />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input type="password"
            name='password'
            value={password}
            onChange={onChange}
            required
           className="validate"
           />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input type="password"
            name='passwordConfirm'
            value={passwordConfirm}
            onChange={onChange}
            required
            className="validate"
           />
          <label htmlFor="passwordConfirm">Password Confirm</label>
        </div>
      </div>
      <input type="submit"
                 className="btn teal darken-3 col s2 offset-s5"
                  value="Register"
                   />
    </form>
  </div>
        </Fragment>
    )
}

export default Register
