import React, {Fragment} from 'react';

const ChangePassword = () => {
    return (
             <Fragment>
            <div className="row">
            <br/>
            <h1 className="center-align">Change Password</h1>
    <form className="col s12">
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
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="newPassword" type="password" className="validate" />
          <label htmlFor="newPassword">New Password</label>
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
