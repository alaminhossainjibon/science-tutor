// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmklK_OEqHu2p-5UqQhdvpSQ1YZWpO7_w",
    authDomain: "science-tutor-b1d1e.firebaseapp.com",
    projectId: "science-tutor-b1d1e",
    storageBucket: "science-tutor-b1d1e.appspot.com",
    messagingSenderId: "1042390616342",
    appId: "1:1042390616342:web:fe72595032f6137fad2837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;