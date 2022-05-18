// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz3tPU2OwnN3HbxCTegfNHd8Q-actb-9Y",
    authDomain: "todo-app-1eb71.firebaseapp.com",
    projectId: "todo-app-1eb71",
    storageBucket: "todo-app-1eb71.appspot.com",
    messagingSenderId: "236328417174",
    appId: "1:236328417174:web:50dec9d0aa796c9ce1cfb7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;