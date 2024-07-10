// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrMj2K8kR7Y59JyFBXJ2l1KjcFQ8rfjRo",
    authDomain: "hotel-mng-4e7b4.firebaseapp.com",
    projectId: "hotel-mng-4e7b4",
    storageBucket: "hotel-mng-4e7b4.appspot.com",
    messagingSenderId: "804715287777",
    appId: "1:804715287777:web:fea6692746f8cd46a093a0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
