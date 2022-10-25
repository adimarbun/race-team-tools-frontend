import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import{getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHrP_DyD4rmoRV53DGUyuGloqU3uMPWcE",
    authDomain: "racetools-4e39b.firebaseapp.com",
    projectId: "racetools-4e39b",
    storageBucket: "racetools-4e39b.appspot.com",
    messagingSenderId: "709403685055",
    appId: "1:709403685055:web:f3dfba9d14b966fef4160a",
    measurementId: "G-NWPKBFYF70"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore(app);