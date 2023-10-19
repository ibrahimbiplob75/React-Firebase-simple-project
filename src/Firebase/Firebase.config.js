
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCat6oO8_awS_kJKN77Loc9PuPs3PS8MRU",
  authDomain: "react-login-register-5490e.firebaseapp.com",
  projectId: "react-login-register-5490e",
  storageBucket: "react-login-register-5490e.appspot.com",
  messagingSenderId: "428643310627",
  appId: "1:428643310627:web:74f3bc40f60f34fa646596"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;