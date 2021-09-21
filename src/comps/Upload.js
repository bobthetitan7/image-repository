import React, { useState } from "react";
import ProgressBar from "./progressBar";
import './style/upload.css'

const allowedType = ['image/png', 'image/jpeg'];

const UploadForm = ({uid}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [upload, setUpload] = useState(false);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && allowedType.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select a valid image file');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span
                onClick={() => setUpload(true)}>+</span>
            </label>
            <div className="output">
                {error && <div className="error"> {error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar uid={uid} file = {file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;