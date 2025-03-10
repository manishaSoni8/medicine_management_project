
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCPL1uh_k_0UrzbdfjEEsoPOIW9FAMNZZs",
  authDomain: "medicine-management-syst-b12fe.firebaseapp.com",
  databaseURL: "https://medicine-management-syst-b12fe-default-rtdb.firebaseio.com",
  projectId: "medicine-management-syst-b12fe",
  storageBucket: "medicine-management-syst-b12fe.appspot.com",
  messagingSenderId: "1025576216033",
  appId: "1:1025576216033:web:d7cfd7a302ebe1aa121ea0",
  measurementId: "G-3H5VT0GFY5"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export default app;
