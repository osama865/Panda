import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyNER6F3WeovrZg0PiJNa0OE2Km0NH5pU",
  authDomain: "panda-37a14.firebaseapp.com",
  databaseURL: "https://panda-37a14.firebaseio.com",
  projectId: "panda-37a14",
  storageBucket: "panda-37a14.appspot.com",
  messagingSenderId: "651396822398",
  appId: "1:651396822398:web:2e977f161a70b7d5c5af2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
