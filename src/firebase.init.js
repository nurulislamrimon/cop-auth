// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByzuRSWT7Y8kirYAONv4bEuBBXB8WsgSU",
    authDomain: "cop-auth.firebaseapp.com",
    projectId: "cop-auth",
    storageBucket: "cop-auth.appspot.com",
    messagingSenderId: "59526854784",
    appId: "1:59526854784:web:4e4154b76788d961134e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;