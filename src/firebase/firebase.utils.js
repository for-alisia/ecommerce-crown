import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAybGvMH8LydWC5yUFXjSHUiI8wQvqwacQ',
  authDomain: 'crown-be1fc.firebaseapp.com',
  projectId: 'crown-be1fc',
  storageBucket: 'crown-be1fc.appspot.com',
  messagingSenderId: '1075600125483',
  appId: '1:1075600125483:web:1ea961ba86c659da12046e',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  /** If user isn't authenticated with Google, just quit */
  if (!userAuth) {
    return;
  }
  /** if user is authenticated, get a reference from firestore with his id */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /** Get a snapshot to see if the user exists in DB */
  const snapShot = await userRef.get();
  /** Create new user, if he doesn't exist in DB */
  if (!snapShot.exists) {
    /** Take data from Google Auth */
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    /** Create new document in firestore DB */
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  /** Return reference to use it in application */
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// TODO: there is a bug with Chrome (on MAC) - we don't have a popup, auth opens in a new tab
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
