import React, { useContext, useEffect } from 'react';
import CommentItem from './CommentItem';
import CurrentThread from '../threads/CurrentThread';

import ThreadContext from '../../context/threads/threadContext';

const Comments = ({match}) => {
    const threadContext = useContext(ThreadContext);

    const { loading, current, getThread, createThread } = threadContext;

    useEffect(() => {
      getThread(match.params.id);
    // eslint-disable-next-line
    }, [])

    if (current === null) {
        return <h4>Please add a thread</h4>;
      }

    return (
        <>
        <CurrentThread current={current} />
        {current.reviews.map(revie => (
        <CommentItem key={revie._id} revie={revie} />
        ))}
        </>
    )
}

export default Comments;
