import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThreadItem = ({thread}) => {
  // const threadContext = useContext(ThreadContext);

  const { _id, name, user, createdAt, reviews } = thread;
  var TimePosted = createdAt.slice(0, 10);
  var Hour = createdAt.slice(12, 16);  
  
  
    return (
        <>
         <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <Link to='/comments' className="title teal-text darken-3" style={{fontSize: '2rem'}}>{name}</Link>
            <br/><br/>
            <Link to='/profile'>Author: {user.name}</Link>
            <Link to='/comments' style={{marginLeft: '2rem'}}>{reviews.length} Comments</Link> 
              <span className="right">{`${TimePosted} at ${Hour}`}</span>
            
            <Link to='/newComment' className="secondary-content"><i className="material-icons">comment</i></Link>
          </li>
        </ul>   
        </>
    )
}

ThreadItem.propTypes = {
  thread: PropTypes.object.isRequired
}

export default ThreadItem;
