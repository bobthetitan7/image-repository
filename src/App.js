import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './comps/Title';
import UploadForm from './comps/Upload';
import ImageGrid from './comps/images';
import Modal from './comps/Modal';
import Mainpage from './comps/Mainpage';
import UploadPrompt from './comps/UploadPrompt';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [uid, setUid] = useState(null);
  const [upload, setUpload] = useState(null);

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
      <UploadForm uid={uid} setUpload={setUpload}/>
      <ImageGrid uid={uid} setSelectedImage={setSelectedImage}/>
      {upload && <UploadPrompt uid={uid} setUpload={setUpload}/>}
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
