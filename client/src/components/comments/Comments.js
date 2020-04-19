import React from 'react';
import CommentItem from './CommentItem';
import CurrentThread from '../threads/CurrentThread';

const Comments = () => {
    return (
        <>
        <CurrentThread />
        <CommentItem />
        </>
    )
}

export default Comments;
