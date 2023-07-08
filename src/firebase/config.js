// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs2hDAZ0r1nOXtzWJpLyATEGqmIvx2ZZA",
  authDomain: "react-app-curso-ce757.firebaseapp.com",
  projectId: "react-app-curso-ce757",
  storageBucket: "react-app-curso-ce757.appspot.com",
  messagingSenderId: "87564853825",
  appId: "1:87564853825:web:014273bd235bcfb62fdcc0"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const  FirebaseDB  = getFirestore( FirebaseApp );