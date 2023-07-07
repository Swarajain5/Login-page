// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZkyCBd-NmSu7seE90cWdadWG1RUe70SM",
  authDomain: "login-page-3668d.firebaseapp.com",
  projectId: "login-page-3668d",
  storageBucket: "login-page-3668d.appspot.com",
  messagingSenderId: "96368187494",
  appId: "1:96368187494:web:01d8697416ca3d80bbb5a7",
  measurementId: "G-SQ0WVHPY8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
