// GANTI isi di bawah ini dengan firebaseConfig dari project Firebase kamu.
// Cara ambil: Firebase Console > Project Settings > scroll ke "Your apps" > pilih app web kamu

const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtE1Ztlf6MuVBflGcpO_BzrLbCxOjabNs",
  authDomain: "kelas-10-pplg.firebaseapp.com",
  projectId: "kelas-10-pplg",
  storageBucket: "kelas-10-pplg.firebasestorage.app",
  messagingSenderId: "875548617572",
  appId: "1:875548617572:web:1dbbed1937e3b4ea84a871",
  measurementId: "G-L60PDNLXEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

firebase.initializeApp(firebaseConfig);
