import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCX_ATx73R-7PnpEJpR3kEw-OKfcpPtaic",
    authDomain: "clone-3c8db.firebaseapp.com",
    projectId: "clone-3c8db",
    storageBucket: "clone-3c8db.appspot.com",
    messagingSenderId: "93297520227",
    appId: "1:93297520227:web:319957dd16cf7b0a0bd256"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };