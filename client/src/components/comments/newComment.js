import React, { Fragment } from 'react'

const newComment = () => {
    return (
        <Fragment>
        <br/>
        <div className="row">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                <label htmlFor="textarea1">Write a Comment ...</label>
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

export default newComment;
