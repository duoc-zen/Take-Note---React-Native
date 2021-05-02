import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBptzMV51iby9DsTecZ0WVcAPu4n_LBesQ",
    authDomain: "notes-43172.firebaseapp.com",
    projectId: "notes-43172",
    storageBucket: "notes-43172.appspot.com",
    messagingSenderId: "422447831992",
    appId: "1:422447831992:web:7afeed29b15f3cc4200d4d",
    measurementId: "G-HCG2V237YR"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);