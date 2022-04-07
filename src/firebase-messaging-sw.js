importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyA60bd32iyfTYFLFuMRdeNOduWvxgEe4Rk",
    authDomain: "e-kaly.firebaseapp.com",
    projectId: "e-kaly",
    storageBucket: "e-kaly.appspot.com",
    messagingSenderId: "943226812231",
    appId: "1:943226812231:web:dc880d9409a7336bd6be62",
    measurementId: "G-SE18CPD4Y3"
});
const messaging = firebase.messaging();