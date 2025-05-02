
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCuHQhLwadQR3Cm8X9Yc3LSieDyq6sILhw",
  authDomain: "drug-management-344af.firebaseapp.com",
  databaseURL: "https://drug-management-344af-default-rtdb.firebaseio.com",
  projectId: "drug-management-344af",
  storageBucket: "drug-management-344af.firebasestorage.app",
  messagingSenderId: "673874263838",
  appId: "1:673874263838:web:e49ce101275dd0d991930f",
  measurementId: "G-5YRWTT537P"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export default app;
