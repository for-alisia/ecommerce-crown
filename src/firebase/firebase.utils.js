import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAybGvMH8LydWC5yUFXjSHUiI8wQvqwacQ',
  authDomain: 'crown-be1fc.firebaseapp.com',
  projectId: 'crown-be1fc',
  storageBucket: 'crown-be1fc.appspot.com',
  messagingSenderId: '1075600125483',
  appId: '1:1075600125483:web:1ea961ba86c659da12046e'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
