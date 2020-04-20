import React, {Fragment, useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';


const Login = (props) => {
    const authContext = useContext(AuthContext);

    const {login, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push('/');
        }
    
        if (error === 'Invalid Credentials') {
        //   setAlert(error,'danger');
          clearErrors();
        }
        // eslint-disable-next-line
      }, [error,isAuthenticated,props.history])
    

      const [user, setUser] = useState({
        email: '',
        password: ''
      });

      const { email, password } = user;

      const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password ==='') {
        //   setAlert('pls fill in all fields', 'danger')
        console.log('failedddd');
        
        } else {
          login({
            email,
            password
          });
        }
      };

    return (
     <Fragment>
        <div className="row center-align">
                <h1>Login</h1>
            <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" name="email" type="email" value={email} onChange={onChange} className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input name="password" type="password" value={password}
            onChange={onChange} className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <input type="submit"
                 className="btn teal darken-3 col s2 offset-s3"
                  value="Login"
                   />
                {/* <input type="submit"
                 className="btn teal darken-3 col s2 push-s2" 
                  value="Forgot"
                   /> */}
            </form>
        </div>
      </Fragment>
    )
}


export default Login
