import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

// กำหนดค่าของ Firebase ที่คุณได้รับจาก Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDbZ7yIEzHLLKep_g49GBRrL2yGyw--aKI",
    authDomain: "cpe499-room.firebaseapp.com",
    projectId: "cpe499-room",
    storageBucket: "cpe499-room.firebasestorage.app",
    messagingSenderId: "771130898891",
    appId: "1:771130898891:web:44818e1d345fca8ed75e4e",
    measurementId: "G-D5CVZ9MW3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// ส่งออกทั้ง auth, firestore และฟังก์ชันที่จำเป็น
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  db,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc
};