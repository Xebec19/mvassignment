import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "YOUR API KEY GOES HERE",
    authDomain: "SECRET",
    projectId: "SECRET",
    storageBucket: "SECRET",
    messagingSenderId: "SECRET",
    appId: "SECRET",
    databaseURL: "DO NOT FORGET TO ADD IT HERE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();