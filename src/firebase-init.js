// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0vELp3x8LKo1yk3ft4hsOf_42PmPWqU0",
  authDomain: "blogging-app-firebase.firebaseapp.com",
  projectId: "blogging-app-firebase",
  storageBucket: "blogging-app-firebase.appspot.com",
  messagingSenderId: "878003949740",
  appId: "1:878003949740:web:d6a3c8d5fd677492644f09"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);