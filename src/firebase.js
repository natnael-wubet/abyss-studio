// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNtJCE6NfPwAdg9lQMoQE3RRNfLQo1IZ4",
  authDomain: "abyssstudio-86889.firebaseapp.com",
  databaseURL:
    "https://abyssstudio-86889-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "abyssstudio-86889",
  storageBucket: "abyssstudio-86889.appspot.com",
  messagingSenderId: "962829739528",
  appId: "1:962829739528:web:9ba11ed4f159f4a4efd3bd",
  measurementId: "G-C5DV1PSC6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
export { app, auth, database, analytics, ref, set, child, get };
