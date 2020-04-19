import React, { Fragment } from 'react';

const ProfileCard = () => {
    return (
        <Fragment>
        <br/>
        <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="images/office.jpg" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <div>
            <p>Email: </p>
            <p>NO Threads: </p>
            <p>Role: </p>
            </div>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Email: </p>
            <p>NO Threads: </p>
            <p>Role: </p>           
            </div>
        </div>
        </Fragment>
    )
}

export default ProfileCard
