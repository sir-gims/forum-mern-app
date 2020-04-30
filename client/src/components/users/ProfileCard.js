import React, {Fragment, useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const ProfileCard = () => {
    const authContext = useContext(AuthContext);

    const {user, error, clearErrors, isAuthenticated} = authContext;

    const ProfilePic = require(`../../../../public/img/users/${user.photo}`);

    return (
        <Fragment>
        <br/>
        <div className="card large row">
            <div className="card-image waves-effect waves-block waves-light col m6 s6">
            <img className="activator" src={ProfilePic} height="270" width="1600" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{user.name}<i className="material-icons right">more_vert</i></span>
            <div>
            <p>Email: {user.email} </p>
            <p>About Me: {user.bio} </p>
            <p>Role: {user.role} </p>
            </div>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{user.name}<i className="material-icons right">close</i></span>
            <p>Email: {user.email} </p>
            <p>About Me: {user.bio} </p>
            <p>Role: {user.role} </p>           
            </div>
        </div>
        </Fragment>
    )
}

export default ProfileCard
