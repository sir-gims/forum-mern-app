import React from 'react';
import { Link } from 'react-router-dom';
    

const CommentItem = ({revie}) => {
  const {  review, createdAt,  user } = revie;
  var TimePosted = createdAt.slice(0, 10);
  var Hour = createdAt.slice(12, 16);  
  const ProfilePic = require(`../../../../public/img/users/${user.photo}`);


    return (
        <>
        <ul className="collection">
         <li className="collection-item avatar">
           <img src={ProfilePic} alt="" className="circle" />
           <Link to='/profile' className="title teal-text darken-3">{user.name}</Link>
           <br/><br/>
           <div>{review}</div> 
             <span className="right">{`${TimePosted} at ${Hour}`}</span>
         </li>
       </ul>   
       </>
    )
}

export default CommentItem;
