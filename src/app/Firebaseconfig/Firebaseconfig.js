// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTZJSeDP2kicLoDGSNH_xeQXQEmOlYpAU",
  authDomain: "bookmydoctor-c988f.firebaseapp.com",
  projectId: "bookmydoctor-c988f",
  storageBucket: "bookmydoctor-c988f.firebasestorage.app",
  messagingSenderId: "941618518502",
  appId: "1:941618518502:web:57256302561bbc440bde27",
  measurementId: "G-SD4EG1XLFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

