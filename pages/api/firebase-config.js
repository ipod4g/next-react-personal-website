import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "personal-website-aca52.firebaseapp.com",
  projectId: "personal-website-aca52",
  storageBucket: "personal-website-aca52.appspot.com",
  messagingSenderId: "52652525451",
  appId: "1:52652525451:web:41d27a85155ea691cf118e",
  measurementId: "G-42HR4SH450"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

