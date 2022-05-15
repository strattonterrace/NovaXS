// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ4SJeqk00P8jQaDEfh1Fm4fStazzQOb8",
  authDomain: "nova-xs-8a1e4.firebaseapp.com",
  projectId: "nova-xs-8a1e4",
  storageBucket: "nova-xs-8a1e4.appspot.com",
  messagingSenderId: "138050860162",
  appId: "1:138050860162:web:9a6d192b0da6cd929df09b",
  measurementId: "G-BVE2LJYCQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);