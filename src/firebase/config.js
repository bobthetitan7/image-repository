// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCnolHBAK2ceaoJCd6DsBGUt1C8wkqbBM",
  authDomain: "shopify-image-repo-85e9b.firebaseapp.com",
  projectId: "shopify-image-repo-85e9b",
  storageBucket: "shopify-image-repo-85e9b.appspot.com",
  messagingSenderId: "336688750157",
  appId: "1:336688750157:web:ac48bc0eec622c13564604"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FBstorage = firebase.storage();
const fireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {FBstorage, fireStore, timestamp};