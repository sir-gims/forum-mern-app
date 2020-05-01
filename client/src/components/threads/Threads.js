import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import ThreadContext from '../../context/threads/threadContext';

const Threads = () => {
  const threadContext = useContext(ThreadContext);

  const { loading, threads, current, loadThreads, createThread } = threadContext;

  useEffect(() => {
    loadThreads();
    // eslint-disable-next-line
  }, []);

  if (threads === null) {
    return <h4>Please add a thread</h4>;
  }

    return (
        <Fragment>
        <h1 className="center-align">Threads</h1>
        {threads.map(thread => (
        <ThreadItem key={thread._id} thread={thread} />
        ))}
      <div className="right-align">
        <Link to='/newThread' class="btn-floating btn-large waves-effect waves-light teal darken-3"><i class="material-icons">add</i></Link>
      </div>
      </Fragment>
    )
}

export default Threads;
