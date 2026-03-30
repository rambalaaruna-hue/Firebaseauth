// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlkZe-OI7ozU-h9ggX485DXMVQ5wYxVs4",
//   authDomain: "auth-f77ef.firebaseapp.com",
//   projectId: "auth-f77ef",
//   storageBucket: "auth-f77ef.firebasestorage.app",
//   messagingSenderId: "843368083966",
//   appId: "1:843368083966:web:14868ed623857a8f37d0af"
// };

// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4V5UD8OTURi-IYLzBmoN08VZcr1xfadQ",
  authDomain: "auth-example-8a056.firebaseapp.com",
  projectId: "auth-example-8a056",
  storageBucket: "auth-example-8a056.firebasestorage.app",
  messagingSenderId: "959892775677",
  appId: "1:959892775677:web:8392ef8832257df3f7d494",
  measurementId: "G-3077NY7HEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
