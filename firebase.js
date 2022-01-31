import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4dh8JK-UKpC-mIuP4I2BFsX27ly2Or7Q",
  authDomain: "airbnb-clone-55182.firebaseapp.com",
  projectId: "airbnb-clone-55182",
  storageBucket: "airbnb-clone-55182.appspot.com",
  messagingSenderId: "435885575321",
  appId: "1:435885575321:web:88a59b35f7da381b127c08",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
