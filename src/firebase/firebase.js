import * as firebase from 'firebase';
// Firebase setup

// const config = {
//     apiKey: "AIzaSyAFyZ87tJF1m0588VAnOluD0CloCK-9iXE",
//     authDomain: "expensify-49e86.firebaseapp.com",
//     databaseURL: "https://expensify-49e86.firebaseio.com",
//     projectId: "expensify-49e86",
//     storageBucket: "expensify-49e86.appspot.com",
//     messagingSenderId: "934080961834"
//   };

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URl ,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
  
firebase.initializeApp(config);

// Define database
const database = firebase.database();

export { firebase, database as default };