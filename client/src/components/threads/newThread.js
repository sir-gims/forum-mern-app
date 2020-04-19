import React, { Fragment } from 'react'

const newThread = () => {

        // "name": "ok",
        // "bodyText": "fkdsl;fkds;gkdsl"
        // images [With multi-form only!!!!]

    return (
        <Fragment>
            <h1>Create a Thread</h1>
            <div className="row">
                <form action="#" className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input id="input_text" type="text" data-length={10} />
                    <label htmlFor="input_text">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="textarea2" className="materialize-textarea" data-length={120} defaultValue={""} />
                    <label htmlFor="textarea2">Textarea</label>
                    </div>
                </div>
                
            
                <div className="file-field input-field">
                <div className="btn teal darken-3">
                    <span>File</span>
                    <input type="file" multiple />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                </div>
                </div>

                <input type="submit"
                 className="btn teal darken-3 col s2 offset-s4"
                  value="Submit"
                   />
                </form>
                </div>
        </Fragment>
    )
}

export default newThread;
