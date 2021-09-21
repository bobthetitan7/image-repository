import React from "react";
import {motion} from "framer-motion";
import './style/Modal.css'

const Modal = ({selectedImage, setSelectedImage}) => {

    return (
        <motion.div className="backdrop" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={(e) => {
            if(e.target.classList.contains('backdrop')) {
                setSelectedImage(null)
            }
        }}>
            <motion.img src={selectedImage} alt="enlarged-pic"
                initial= {{y: "-100vh"}}
                animate= {{y: 0}}/>
        </motion.div>
    )
}

export default Modal;