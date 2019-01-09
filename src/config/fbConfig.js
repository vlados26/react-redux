import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhBfSuSWC8Bj7Ih-papzl4rN2szRmrcIc",
  authDomain: "net-ninja-marioplan-9b51c.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-9b51c.firebaseio.com",
  projectId: "net-ninja-marioplan-9b51c",
  storageBucket: "net-ninja-marioplan-9b51c.appspot.com",
  messagingSenderId: "889016120659"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;