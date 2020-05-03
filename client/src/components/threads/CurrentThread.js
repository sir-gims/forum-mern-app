import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const CurrentThread = ({current}) => {
    const { _id, name, images, createdAt, bodyText, user } = current;
    var TimePosted = createdAt.slice(0, 10);
    var Hour = createdAt.slice(12, 16);  

    return (
        <Fragment>
        <div className="row"></div>
        <br/>
        <div className="row">
            <div className="row"></div>
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title black-text">{name}</span>
                </div>
                <div className="card-content">
                <p>{bodyText}</p>
                </div>
                <div className="card-action black-text">
                <Link to='/profile'>{user.name}</Link>
                <Link to={`/newComment/${_id}`}>Write a Comment</Link>
                <span className="right">{`${TimePosted} at ${Hour}`}</span>
                </div>
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default CurrentThread;
