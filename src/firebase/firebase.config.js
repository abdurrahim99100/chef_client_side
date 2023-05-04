// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD94w8wBrR94SXhM3A90C4d0c6gs7QBAw",
  authDomain: "the-chef-zone.firebaseapp.com",
  projectId: "the-chef-zone",
  storageBucket: "the-chef-zone.appspot.com",
  messagingSenderId: "553764626106",
  appId: "1:553764626106:web:778305a145568a12026c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;