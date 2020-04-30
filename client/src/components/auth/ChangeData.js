import React, {Fragment, useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const ChangeData = (props) => {
  const authContext = useContext(AuthContext);

  const {changeData, uploadProfilePic, error, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login');
    }

    if (error === 'chanfe already exists') {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error,isAuthenticated,props.history]);

  // fullName || name
  // email 
  //bio
  //photo

  const [data, setData] = useState({
    name: null,
    email: null,
    bio: null,
    photo:  null
  });

  const { name, email, bio, photo } = data;

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const onFileChange = e => {
    setData({ ...data, [e.target.name]: e.target.files[0]});
  }

  const removeEmpty = (obj) => {
    Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
    return obj;
  };

  let cleaner = removeEmpty(data);

  const onSubmit = e => {
    e.preventDefault();

    if (photo !== null || photo !== undefined) {
      const formData = new FormData();
      formData.append('photo', photo);
      // formData.append(JSON.stringify(cleaner));
      uploadProfilePic(formData);
    } 
      changeData(cleaner); 
      // uploadProfilePic(cleaner);

    props.history.push('/')    
  };

    return (
        <Fragment>
             <div className="row">
            <h1 className="center-align">Edit Profile</h1>
    <form className="col s12" onSubmit={onSubmit} >
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input placeholder=" "
            name="name"
            type="text"
            value={name}
            onChange={onChange}
            className="validate"
              />
          <label htmlFor="name">FullName</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="email"
           type="email"
           value={email}
           onChange={onChange}
           className="validate"
            />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input name="bio"
           type="text"
           className="validate"
           value={bio}
           onChange={onChange}
            />
          <label htmlFor="bio">About me</label>
        </div>
      </div>
      <div className="file-field input-field col s8 offset-s2">
        <div className="btn">
          <span>File</span>
          <input type="file"
                 name="photo"
                 onChange={onFileChange}  
           />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate"
                 placeholder="upload a profile picture"
                type="text"
                 />
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

export default ChangeData;
