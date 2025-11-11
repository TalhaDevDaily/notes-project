// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdtCuJcmGEoZ1799Cl0YIwXXeGOvliLQI",
  authDomain: "notes-2501.firebaseapp.com",
  projectId: "notes-2501",
  storageBucket: "notes-2501.firebasestorage.app",
  messagingSenderId: "379501693275",
  appId: "1:379501693275:web:a083d89c73249d97e9727e",
  measurementId: "G-FJ1TJ91KGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
