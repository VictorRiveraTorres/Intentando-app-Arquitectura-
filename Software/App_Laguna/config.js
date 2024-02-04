import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBTwQaMjrNKgbguf-EcPGDfPclgdtBzrNw",
    authDomain: "fdd-2024.firebaseapp.com",
    databaseURL: "https://fdd-2024-default-rtdb.firebaseio.com",
    projectId: "fdd-2024",
    storageBucket: "fdd-2024.appspot.com",
    messagingSenderId: "181335914798",
    appId: "1:181335914798:web:94a5c76b780c6fd2b722bf",
    measurementId: "G-SKMPMTEKRE"
  };
  if (firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
  const db =getDatabase();
  export{db}