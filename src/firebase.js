// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRrlL0bSPaGQIQC6_K8XOjFe0OzFM0So0",
    authDomain: "react-auth-10af7.firebaseapp.com",
    projectId: "react-auth-10af7",
    storageBucket: "react-auth-10af7.appspot.com",
    messagingSenderId: "475623020084",
    appId: "1:475623020084:web:328a4c057e53d73ec55c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);