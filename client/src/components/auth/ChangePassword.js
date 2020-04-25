import React, {Fragment, useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';


const ChangePassword = (props) => {
  const authContext = useContext(AuthContext);

  const {changePassword, error, logout, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login');
    }

    if (error === 'chanfe already exists') {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error,isAuthenticated,props.history]);

  const [passwordr, setPasswordr] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: ''
  });

  const { passwordCurrent, passwordConfirm, password } = passwordr;

  const onChange = e => setPasswordr({ ...passwordr, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();
        if (passwordCurrent === '' || passwordConfirm ==='' || password === '') {
        //   setAlert('pls fill in all fields', 'danger')
        console.log('failedddd');
        
        } else {
          changePassword({
            passwordCurrent,
            password,
            passwordConfirm
          });
          // logout(); 
        }
      };

    return (
             <Fragment>
            <div className="row">
            <br/>
            <h1 className="center-align">Change Password</h1>
    <form className="col s12" onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="passwordCurrent"
           type="password"
           value={passwordCurrent}
           onChange={onChange}
            className="validate"
             />
          <label htmlFor="passwordCurrent">Current Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="password"
           type="password"
           value={password}
           onChange={onChange}
           className="validate"
             />
          <label htmlFor="password">New Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="passwordConfirm"
           type="password"
           value={passwordConfirm}
           onChange={onChange}
            className="validate"
             />
          <label htmlFor="passwordConfirm">Password Confirm</label>
        </div>
      </div>
      <input type="submit"
                 className="btn pink lighten-2 col s2 offset-s5"
                  value="Submit"
                   />
    </form>
  </div>
        </Fragment>
    )
}

export default ChangePassword;
