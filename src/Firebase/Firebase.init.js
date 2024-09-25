// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9JyQqX0oZW8ikeWIUTWaWxJcQgWTb7Z0",
  authDomain: "red-onion-5ab2b.firebaseapp.com",
  projectId: "red-onion-5ab2b",
  storageBucket: "red-onion-5ab2b.appspot.com",
  messagingSenderId: "304348963252",
  appId: "1:304348963252:web:a4c741b1fa5424a4d4d2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;