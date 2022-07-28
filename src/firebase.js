import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyANEy0-OaymDjdsQJnTz4P9vFCuZ4m9k1k",
  authDomain: "go-invoice.firebaseapp.com",
  projectId: "go-invoice",
  storageBucket: "go-invoice.appspot.com",
  messagingSenderId: "871994384164",
  appId: "1:871994384164:web:015c078430c79658dbddb1",
  measurementId: "G-3GBQWY43V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {db, auth};
