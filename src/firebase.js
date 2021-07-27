import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT-xBlJlKhSP-c9bqwvD5cfu453lCOOpY",
  authDomain: "twitter-37bcf.firebaseapp.com",
  databaseURL: "https://twitter-37bcf.firebaseio.com",
  projectId: "twitter-37bcf",
  storageBucket: "twitter-37bcf.appspot.com",
  messagingSenderId: "53960721401",
  appId: "1:53960721401:web:23093b02de44abfdd2f328",
  measurementId: "G-XND6RCJHCP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
