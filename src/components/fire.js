import Rebase from "re-base";
import firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const app = firebase.initializeApp(config);

const firestore = app.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const base = Rebase.createClass(firestore);

export { base };

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
