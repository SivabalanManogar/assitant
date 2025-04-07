import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBjDePHAkXQ4QL1xTUMsxaOkUYZGabY5nQ",
  authDomain: "carrer-as.firebaseapp.com",
  projectId: "carrer-as",
  storageBucket: "carrer-as.appspot.com", 
  messagingSenderId: "684468415837",
  appId: "1:684468415837:web:67fe967b862b9c4610ccb4",
  measurementId: "G-EKBYZN3BVF"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };
