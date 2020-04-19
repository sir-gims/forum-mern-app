import React, {Fragment, useState} from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    return (
     <Fragment>
        <div className="row center-align">
            <form className="col s12">
                <h1>Login</h1>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <input type="submit"
                 className="btn teal darken-3 col s2 offset-s3"
                  value="Login"
                   />
                <input type="submit"
                 className="btn teal darken-3 col s2 push-s2" 
                  value="Forgot"
                   />
            </form>
        </div>
      </Fragment>
    )
}


export default Login
