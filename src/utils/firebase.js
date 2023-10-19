// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZTUcOTUeuaxhYkG6_HLtAOrUhVkW6UHY",
  authDomain: "netflixgpt-75a30.firebaseapp.com",
  projectId: "netflixgpt-75a30",
  storageBucket: "netflixgpt-75a30.appspot.com",
  messagingSenderId: "45376348061",
  appId: "1:45376348061:web:2a29df7bae5539cc7e1974",
  measurementId: "G-E3XHPFGPL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()