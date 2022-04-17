// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjy_hj0JEhHHcaVw1fUlbSju8yqvoZMk",
  authDomain: "bloomy-captures.firebaseapp.com",
  projectId: "bloomy-captures",
  storageBucket: "bloomy-captures.appspot.com",
  messagingSenderId: "1046055088844",
  appId: "1:1046055088844:web:4a76636c96e93326df0869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;