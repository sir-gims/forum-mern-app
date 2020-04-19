import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const CurrentThread = () => {
    return (
        <Fragment>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row">
            <div className="row"></div>
            <div className="col s12 m12">
            <div className="card">
                <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title black-text">Card Title</span>
                </div>
                <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action black-text">
                <Link to='/profile'>Author</Link>
                <Link to='/newComment'>Write a Comment</Link>
                <span className="right">Date</span>
                </div>
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default CurrentThread;
