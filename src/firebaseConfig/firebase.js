// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAac0Ng23yEu-YrAzatxazLaPUSgZB76XQ",
  authDomain: "crud-fire-react-64188.firebaseapp.com",
  databaseURL: "https://crud-fire-react-64188-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-64188",
  storageBucket: "crud-fire-react-64188.appspot.com",
  messagingSenderId: "420941201517",
  appId: "1:420941201517:web:0fd8c6b7065bfcb2757f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Crea la conexion a la base de datos utilizando getFirestore
export const db = getFirestore(app)