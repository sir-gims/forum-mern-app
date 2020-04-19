import React from 'react';
import { Link } from 'react-router-dom';

const ThreadItem = () => {
    return (
        <>
         <ul className="collection">
          <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <Link to='/comments' className="title teal-text darken-3" style={{fontSize: '2rem'}}>Title</Link>
            <br/><br/>
            <Link to='/profile'>Author</Link>
            <Link to='/comments'> #Comments</Link> 
              <span className="right">Date</span>
            
            <Link to='/newComment' className="secondary-content"><i className="material-icons">comment</i></Link>
          </li>
        </ul>   
        </>
    )
}

export default ThreadItem;
