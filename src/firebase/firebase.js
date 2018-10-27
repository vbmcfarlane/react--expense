import * as firebase from 'firebase';
// Firebase setup

const config = {
    apiKey: "AIzaSyAFyZ87tJF1m0588VAnOluD0CloCK-9iXE",
    authDomain: "expensify-49e86.firebaseapp.com",
    databaseURL: "https://expensify-49e86.firebaseio.com",
    projectId: "expensify-49e86",
    storageBucket: "expensify-49e86.appspot.com",
    messagingSenderId: "934080961834"
  };

  // const config = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTHDOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URl ,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  // };
  

// Initialize database
firebase.initializeApp(config);
// Define database
const database = firebase.database();

export { firebase, database as default };

//====================setup data in database ==================================
// setup firebase database with data
// database.ref('expenses').push({
//   description: 'Internet',
//   note: '',
//   amount:40500,
//   createdAt: 976123498763
// });
// database.ref('expenses').push({
//   description: 'Mortgage',
//   note: '',
//   amount:391000,
//   createdAt: 978123498763
// }); 
// database.ref('expenses').push({
//   description: 'Internet',
//   note: 'Comcast',
//   amount:90000,
//   createdAt: 978123498763
// });

// database.ref('expenses').push({
//   description: 'Mobile Phone',
//   note: 'Comcast',
//   amount:24000,
//   createdAt: 988123498763
// });

// =======================child remove ============================
// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
// // ======================child changed ===========================
//   database.ref('expenses').on('child_changed',(snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//     });
// // ======================child Added =============================
// database.ref('expenses').on('child_added',(snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//===================render everything===========================
// database.ref('expenses')
//   .once( 'value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//     });
     
//     console.log(expenses);
//   });
  
//======================== render changes=========================
// database.ref('expenses')
//   .on('value',(snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//     });
     
//     console.log(expenses);
//   });
  
//================================================================
// const notes = [{
//   id: '12',
//   title: 'First Note!',
//   body: 'This is the body of the first note'
// },{
//   id: '14',
//   title: 'second Note!',
//   body: 'This is the body of the second note'
// }];
// database.ref('notes').set(notes);

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: '',
//   amount: 10950,
//   createdAt:  988861234982
// });
// =================================================================

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// setup firebase database with data

// setup firebase database with data
// database.ref('expenses').push({
//   description: 'Internet',
//   note: '',
//   amount:40500,
//   createdAt: 976123498763
// });
//=================

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

// ==================iderates over each iem in the array====================

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });








// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Vondy McFarlane',
//   age: 58,
//   stressLevel: 6,
//   job: {
//     title: '
// Fullstack developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Castle Pines',
//     state: 'Colorado' 
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
