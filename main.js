import { handleAuth } from './auth'
import { handleTodos } from "./todos"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKEZYK77OPqDro7wEDm4iVssl2srSjC2g",
  authDomain: "hrma-5ec84.firebaseapp.com",
  projectId: "hrma-5ec84",
  storageBucket: "hrma-5ec84.appspot.com",
  messagingSenderId: "555454019427",
  appId: "1:555454019427:web:2e014a372497051d9d4556"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

handleAuth(app)
handleTodos(db)
