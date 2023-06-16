// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwHpUn-YP2V2h7ZD46YpRCRJJV-241Ff0",
  authDomain: "random-colors-4e832.firebaseapp.com",
  projectId: "random-colors-4e832",
  storageBucket: "random-colors-4e832.appspot.com",
  messagingSenderId: "1009493065905",
  appId: "1:1009493065905:web:107527645180df33ca2290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };