// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyALftsjSVpUE-Jrw8MyG-UgxHB9y8Y_SUM",
  authDomain: "buzz-app-a75bb.firebaseapp.com",
  projectId: "buzz-app-a75bb",
  storageBucket: "buzz-app-a75bb.appspot.com",
  messagingSenderId: "968458633134",
  appId: "1:968458633134:web:44a5270cf8359fec8bd23f"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);


export const authentication=getAuth(Firebase);