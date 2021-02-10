import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyC32-30nIjmSGEZKxwGqrTa51KZQ23bswU",
    authDomain: "ecommerce-764e9.firebaseapp.com",
    projectId: "ecommerce-764e9",
    storageBucket: "ecommerce-764e9.appspot.com",
    messagingSenderId: "398980165110",
    appId: "1:398980165110:web:8c096747e38e5098f1abd7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();