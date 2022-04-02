import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut  } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, query, where } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWhvlZoRiKXw3TPGpZcIqT0Xhl9LSxB10",
  authDomain: "food-delivery-app-50493.firebaseapp.com",
  projectId: "food-delivery-app-50493",
  storageBucket: "food-delivery-app-50493.appspot.com",
  messagingSenderId: "19616103659",
  appId: "1:19616103659:web:6711860cba5e8f30c652ae",
  measurementId: "G-Z5NGMQCCZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();
const userRef = collection(db, 'user')
const restaurantsRef = collection(db, 'restaurants')
const dishRef = collection(db, 'dishes')
const storage = getStorage();

export {
  auth,
  signOut,
  createUserWithEmailAndPassword,
  db,
  userRef,
  restaurantsRef,
  doc,
  addDoc,
  setDoc,
  getDoc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  where,
  query,
  getDocs,
  collection,
  dishRef
}