import React, { useState } from "react";
import {motion} from "framer-motion";
import ProgressBar from "./progressBar";
import './style/uploadPrompt.css'

const allowedType = ['image/png', 'image/jpeg'];

const UploadPrompt = ({uid, setUpload}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && allowedType.includes(selected.type)) {
            setFile(selected);
            setError(null);
            // setUpload(null);
        } else {
            setFile(null);
            setError('Please select a valid image file');
        }
    }

    return (

        <motion.div className="backdrop" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={(e) => {
            if(e.target.classList.contains('backdrop')) {
                setUpload(null);
            }
        }}>
            <form className='uploadForm'>
                <div className='uploadtitle'>
                    Upload an Image
                </div>
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                
                <label for="title">Title</label>
                <input type="text" id="title" name="title"></input>

                <label for="desc">Description</label>
                <input type="text" id="desc" name="desc"></input>

                <input type="submit" value="Submit"></input>

                <div className="output">
                    {error && <div className="error"> {error} </div>}
                    {file && <div> {file.name} </div>}
                    {file && <ProgressBar uid={uid} file = {file} setFile={setFile} setUpload={setUpload}/>}
                </div>
            </form>
        </motion.div>

        
    )
}

export default UploadPrompt;
