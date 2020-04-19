import React from 'react';
import { Link } from 'react-router-dom';
    

const CommentItem = () => {
    return (
        <>
        <ul className="collection">
         <li className="collection-item avatar">
           <img src="images/yuna.jpg" alt="" className="circle" />
           <Link to='/profile' className="title teal-text darken-3">Name of Author</Link>
           <br/><br/>
           <div># Comment ....</div> 
             <span className="right">Date</span>
         </li>
       </ul>   
       </>
    )
}

export default CommentItem;
