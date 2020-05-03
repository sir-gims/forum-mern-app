import React, {Fragment, useState, useContext, useEffect} from 'react';
import ThreadContext from '../../context/threads/threadContext';

const NewComment = (props) => {
    const threadContext = useContext(ThreadContext);

    const { loading, current, getThread, createComment } = threadContext;

     var id = props.match.params.id;
    //  useEffect(() => {
        
    //   getThread(id);
    // // eslint-disable-next-line
    // }, [])

      const [comment, setComment] = useState({
        review: null
      });
    
      const { review } = comment;
    
      const onChange = e => setComment({ ...comment, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
     
         createComment(id,comment); 
        //  console.log(comment.Review);
         
          // uploadProfilePic(cleaner);
        setTimeout(() => {
          props.history.push('/')    
        }, 3000);
      };
    

    return (
        <Fragment>
        <br/>
        <div className="row">
            <form onSubmit={onSubmit} className="col s12">
            <div className="row">
                <div className="input-field col s12">
                <textarea name="review"
                 className="materialize-textarea"
                 value={review}
                  onChange={onChange}
                  defaultValue={""}
                   />
                <label htmlFor="review">Write a Comment ...</label>
                </div>
            </div>
            <input type="submit"
                 className="btn teal darken-3 col s2 offset-s5"
                  value="Submit"
                   />
            </form>
        </div>
        </Fragment>
    )
}

export default NewComment;
