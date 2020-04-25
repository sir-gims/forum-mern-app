import React, {Fragment} from 'react';

const EditItem = () => {
    return (
        <Fragment>
             <div className="row">
            <h1 className="center-align">Edit Profile</h1>
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
          <input id="aboutMe" type="text" className="validate" />
          <label htmlFor="aboutMe">About-me</label>
        </div>
      </div>
      <div className="file-field input-field col s8 offset-s2">
        <div className="btn">
          <span>File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" placeholder="upload a profile picture" type="text" />
        </div>
      </div>
      <input type="submit"
                 className="btn teal darken-3 col s2 offset-s5"
                  value="Submit"
                   />
    </form>
  </div>
        </Fragment>
    )
}

export default EditItem;
