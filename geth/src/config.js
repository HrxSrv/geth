// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIGYZsQaQSPFZ7SATZ-ZW3PcdBPkvqUVA",
  authDomain: "geth-586f2.firebaseapp.com",
  projectId: "geth-586f2",
  storageBucket: "geth-586f2.appspot.com",
  messagingSenderId: "228933051333",
  appId: "1:228933051333:web:e43a37284a4e5cea8ba1ac",
  measurementId: "G-2PXFP5W4M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
