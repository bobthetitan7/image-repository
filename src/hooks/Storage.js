import {useState, useEffect} from "react";
import { FBstorage, fireStore, timestamp } from "../firebase/config";

const Storage = (uid, file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
       const storageLocation = FBstorage.ref(file.name);
       const collectionRef = fireStore.collection('images');
       
       storageLocation.put(file).on('image_changed', (snap) => {
           let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
           setProgress(percent);
       }, (err) => {
           setError(err);
       }, async() => {
        const url = await storageLocation.getDownloadURL();
        collectionRef.add({url, createdAt:timestamp(), userid: uid})
        setUrl(url);
    })
    }, [file, uid]);

    return {progress, url, error}
}

export default Storage;