import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIx-OqQJDfyzw05ZQPscUFSvvXP5nozvo",
    authDomain: "twitter-cloning.firebaseapp.com",
    databaseURL: "https://twitter-cloning.firebaseio.com",
    projectId: "twitter-cloning",
    storageBucket: "twitter-cloning.appspot.com",
    messagingSenderId: "719568945811",
    appId: "1:719568945811:web:903391a57e4467bc7bc366",
    measurementId: "G-PX0LKQLJL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;