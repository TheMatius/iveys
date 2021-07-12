import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "iveys-app.firebaseapp.com",
  databaseURL: "https://iveys-app-default-rtdb.firebaseio.com",
  projectId: "iveys-app",
  storageBucket: "iveys-app.appspot.com",
  messagingSenderId: "350463393620",
  appId: "1:350463393620:web:6b122e28d08c4e88s0812c1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();