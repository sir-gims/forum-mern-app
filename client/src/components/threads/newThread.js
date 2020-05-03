import React, {Fragment, useState, useContext, useEffect} from 'react';
import ThreadContext from '../../context/threads/threadContext';

const NewThread = (props) => {
    const threadContext = useContext(ThreadContext);

        // "name": "ok",
        // "bodyText": "fkdsl;fkds;gkdsl"
        // images [With multi-form only!!!!]

        const {createThread, error, clearErrors} = threadContext;

        useEffect(() => {
        
          if (error === 'chanfe already exists') {
            clearErrors();
          }
          // eslint-disable-next-line
        }, [error, props.history]);
      
        const [thread, setThread] = useState({
          name: null,
          bodyText: null,
          images:  null
        });
      
        const { name, bodyText, images } = thread;
      
        const onChange = e => setThread({ ...thread, [e.target.name]: e.target.value });
      
        const onFileChange = e => {
          setThread({ ...thread, [e.target.name]: e.target.files[0]});
        }
      
        const removeEmpty = (obj) => {
          Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
          return obj;
        };
      
        let cleaner = removeEmpty(thread);
      
        const onSubmit = e => {
          e.preventDefault();
      
          if (images !== null || images !== undefined) {
            const formData = new FormData();
            formData.append('images', images);
            // formData.append(JSON.stringify(cleaner));
            createThread(formData);
          } 
            createThread(cleaner); 
            // uploadProfilePic(cleaner);
          setTimeout(() => {
            props.history.push('/')    
          }, 3000);
        };
      

    return (
        <Fragment>
            <h1>Create a Thread</h1>
            <div className="row">
                <form onSubmit={onSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input name="name"
                     type="text"
                     value={name}
                     onChange={onChange}
                     data-length={10}
                       />
                    <label htmlFor="name">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <textarea name="bodyText"
                     className="materialize-textarea"
                     value={bodyText}
                     onChange={onChange}
                      data-length={120}
                       defaultValue={""}
                        />
                    <label htmlFor="bodyText">Textarea</label>
                    </div>
                </div>
                
            
                <div className="file-field input-field">
                <div className="btn teal darken-3">
                    <span>File</span>
                    <input type="file" name="images" onChange={onFileChange} multiple />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload Images" />
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

export default NewThread;
