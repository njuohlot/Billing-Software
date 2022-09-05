import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBDRWa-ak1dwT_cC3bQIERaR-gug9drtKM",
  authDomain: "easybill-77633.firebaseapp.com",
  projectId: "easybill-77633",
  storageBucket: "easybill-77633.appspot.com",
  messagingSenderId: "53683226666",
  appId: "1:53683226666:web:d55f8821d7c407cf569b53",
  measurementId: "G-4SBNS8P8LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {db, auth};
