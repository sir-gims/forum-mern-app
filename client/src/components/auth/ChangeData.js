import React, {Fragment} from 'react';

const EditItem = () => {
    return (
        <Fragment>
             <div className="row">
             <br/>
            <h1 className="center-align">Edit Data</h1>
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
      <input type="submit"
                 className="btn pink lighten-2 col s2 offset-s5"
                  value="Submit"
                   />
    </form>
  </div>
        </Fragment>
    )
}

export default EditItem;
