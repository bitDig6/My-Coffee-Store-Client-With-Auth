// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XWOM2yZPYBl8LbLAjyDlpn9wDF4Zv50",
  authDomain: "my-coffee-store-363c7.firebaseapp.com",
  projectId: "my-coffee-store-363c7",
  storageBucket: "my-coffee-store-363c7.firebasestorage.app",
  messagingSenderId: "1025008452969",
  appId: "1:1025008452969:web:b8e247e92d14fa214ca9f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;