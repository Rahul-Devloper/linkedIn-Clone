import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCM-w3QhS4uGt0g-lfPspCPDy26qF08A4I",
    authDomain: "linkedin-clone-7c772.firebaseapp.com",
    projectId: "linkedin-clone-7c772",
    storageBucket: "linkedin-clone-7c772.appspot.com",
    messagingSenderId: "157437517007",
    appId: "1:157437517007:web:9cd16ec96ed0048244abba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};