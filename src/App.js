import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './comps/Title';
import UploadForm from './comps/Upload';
import ImageGrid from './comps/images';
import Modal from './comps/Modal';
import Mainpage from './comps/Mainpage';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [uid, setUid] = useState(null);
  // let uid = null;

  // if (localStorage.hasOwnProperty("clientId") && localStorage.getItem("clientId") != null) {
  //   uid = localStorage.getItem("clientId");
  // } else {
  //   uid = uuidv4();
  //   localStorage.setItem("clientId", uid = uuidv4())
  // }

  if (localStorage.hasOwnProperty("clientId")) {
    if(uid !== localStorage.getItem("clientId")) {
      setUid(localStorage.getItem("clientId"));
    }
  } else {
    localStorage.setItem("clientId", uuidv4());
    setUid(localStorage.getItem("clientId"));
  }

  console.log(uid)

  return (
    <div className="App">
      <Title/>
      <Mainpage/>
      <UploadForm uid={uid}/>
      <ImageGrid uid={uid} setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
