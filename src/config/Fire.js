import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCv_S8ncOpIXTt0Xrl3PJN_wbVfBEP2ssE",
  authDomain: "expense-tracker-568f8.firebaseapp.com",
  projectId: "expense-tracker-568f8",
  storageBucket: "expense-tracker-568f8.appspot.com",
  messagingSenderId: "252092574625",
  appId: "1:252092574625:web:85f708d70dc1bffd31b9e0"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
