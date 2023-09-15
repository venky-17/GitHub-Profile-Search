// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACn8xn-BMGVg926GGPPw_gjWdg6s7JIfc",
  authDomain: "github-search-39a86.firebaseapp.com",
  projectId: "github-search-39a86",
  storageBucket: "github-search-39a86.appspot.com",
  messagingSenderId: "16989979937",
  appId: "1:16989979937:web:2c145f03bc1882c83fea60",
  measurementId: "G-VF0S4YBD8J"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}




export default firebaseConfig;