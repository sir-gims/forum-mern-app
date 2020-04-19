import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ThreadItem from './ThreadItem';

const Threads = () => {
    return (
        <Fragment>
        <h1 className="center-align">Threads</h1>
        <ThreadItem />
      <div className="right-align">
        <Link to='/newThread' class="btn-floating btn-large waves-effect waves-light teal darken-3"><i class="material-icons">add</i></Link>
      </div>
      </Fragment>
    )
}

export default Threads;
