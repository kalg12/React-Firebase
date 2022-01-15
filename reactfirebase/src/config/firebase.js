import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite' /* Importamos getFirestore para conectarnos a la base de datos*/

const firebaseConfig = {
  apiKey: "AIzaSyCxogqsLdUtXkRPIvMEY1TVghTWKnUdSyM",
  authDomain: "crud-react-4d215.firebaseapp.com",
  projectId: "crud-react-4d215",
  storageBucket: "crud-react-4d215.appspot.com",
  messagingSenderId: "362752864312",
  appId: "1:362752864312:web:7bed87d486360d7fdeb6cd",
  measurementId: "G-7YLMR0SYYM"
};

const app = initializeApp(firebaseConfig);
export const dbConfig = getFirestore(app);