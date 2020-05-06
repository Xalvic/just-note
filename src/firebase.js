import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCWmBfTni1aZvEkVF6bh59Uh1qUbV3Rx3Y",
  authDomain: "real-social-xoxo.firebaseapp.com",
  databaseURL: "https://real-social-xoxo.firebaseio.com",
  projectId: "real-social-xoxo",
  storageBucket: "real-social-xoxo.appspot.com",
  messagingSenderId: "1057710849951",
  appId: "1:1057710849951:web:78ce9a4dfc77bdc1ba47aa",
};

firebase.initializeApp(config);

export default firebase;
