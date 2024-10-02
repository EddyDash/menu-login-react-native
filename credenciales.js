// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqhxZbec5lMYaoDU4RS3GVTIYYkBrgY6s",
  authDomain: "loginmenu-20f66.firebaseapp.com",
  projectId: "loginmenu-20f66",
  storageBucket: "loginmenu-20f66.appspot.com",
  messagingSenderId: "1032211785494",
  appId: "1:1032211785494:web:57edce6c1a8c3ee3721237"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase