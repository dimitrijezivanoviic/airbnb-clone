import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4dh8JK-UKpC-mIuP4I2BFsX27ly2Or7Q",
  authDomain: "airbnb-clone-55182.firebaseapp.com",
  projectId: "airbnb-clone-55182",
  storageBucket: "airbnb-clone-55182.appspot.com",
  messagingSenderId: "435885575321",
  appId: "1:435885575321:web:88a59b35f7da381b127c08",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
