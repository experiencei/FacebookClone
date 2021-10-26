import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAHbM4yArDGX4pBu9h9kojYz-aormS_oeY",
  authDomain: "facebookclone-371e5.firebaseapp.com",
  projectId: "facebookclone-371e5",
  storageBucket: "facebookclone-371e5.appspot.com",
  messagingSenderId: "883028888535",
  appId: "1:883028888535:web:e31874c9f329a455745992"
};


const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
