import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC5xxU9JaJNTyW4M4SV5rjOSrNal7uxMeM",
    authDomain: "basic-banking-system-9cf24.firebaseapp.com",
    projectId: "basic-banking-system-9cf24",
    storageBucket: "basic-banking-system-9cf24.appspot.com",
    messagingSenderId: "424078699720",
    appId: "1:424078699720:web:c67c09e5df87c1721a49fd"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };