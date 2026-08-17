// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj7eV6xktwf9-taz4jBjhDMXR7njA3fUE",
    authDomain: "web-builder-c3218.firebaseapp.com",
    projectId: "web-builder-c3218",
    storageBucket: "web-builder-c3218.firebasestorage.app",
    messagingSenderId: "1074772655175",
    appId: "1:1074772655175:web:617a73b09e60cf236b0562",
    measurementId: "G-7ZX36LHLY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
