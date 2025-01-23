// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe4oMO0T4RWHJkfDKteu9ZhOa-X7yoTX0",
  authDomain: "votely-e5f5e.firebaseapp.com",
  projectId: "votely-e5f5e",
  storageBucket: "votely-e5f5e.firebasestorage.app",
  messagingSenderId: "258467818936",
  appId: "1:258467818936:web:8d2fb6289ba0b3752a734d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export default app;