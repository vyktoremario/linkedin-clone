import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVNogoTLDrAnGqLP3Q2tX3n7ZLM0Tu0uw",
  authDomain: "linkedin-clone-b3e6d.firebaseapp.com",
  projectId: "linkedin-clone-b3e6d",
  storageBucket: "linkedin-clone-b3e6d.appspot.com",
  messagingSenderId: "942320106948",
  appId: "1:942320106948:web:aeb4d93f25e7df5b0f3891"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const authentication = auth();

export { db };