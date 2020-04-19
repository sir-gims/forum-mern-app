import React, {Fragment, useState} from 'react'

const Register = () => {

    // "name": "shoki",
	// "email": "shqoi@programi.io",
	// "password": "pass1234",
    // "passwordConfirm": "pass1234",
    // role

    return (
        <Fragment>
            <div className="row">
            <br/>
            <h1 className="center-align">Register</h1>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input placeholder=" " id="first_name" type="text" className="validate" />
          <label htmlFor="first_name">FullName</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="passwordConfirm" type="password" className="validate" />
          <label htmlFor="passwordConfirm">Password Confirm</label>
        </div>
      </div>
      <input type="submit"
                 className="btn pink lighten-2 col s2 offset-s5"
                  value="Register"
                   />
    </form>
  </div>
        </Fragment>
    )
}

export default Register
