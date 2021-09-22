import React, { useState } from "react";
import './style/upload.css'


const UploadForm = ({uid, setUpload}) => {

    return (
        <form className='upload'>
            <label>
                <span onClick={() => setUpload(true)}>+</span>
            </label>
        </form>
    )
}

export default UploadForm;