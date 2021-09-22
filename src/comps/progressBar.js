import React, { useEffect } from "react";
import Storage from "../hooks/Storage";
import {motion} from "framer-motion";
import './style/progressbar.css'

const ProgressBar = ({uid, file, setFile, setUpload}) => {

    const {url, progress} = Storage(uid, file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    if(progress === 100) {
        setUpload(null)
    }

    return(
        <motion.div className="progress-bar"
            initial={{width: 0}}
            animate={{width: progress + '%'}}>
        </motion.div>
    )
}

export default ProgressBar;