// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrWHVdBgpdApcdOX_n0_zGHKnlZuL0U5U",
    authDomain: "ed-tech-courses.firebaseapp.com",
    projectId: "ed-tech-courses",
    storageBucket: "ed-tech-courses.appspot.com",
    messagingSenderId: "1080649414890",
    appId: "1:1080649414890:web:7b8642c8eebc08ecabbf93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;