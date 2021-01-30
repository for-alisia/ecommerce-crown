/** Redux elements */
import { ShopActionTypes } from './shop.types';

/** Utils */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

/** If we work with Thunk middleware this code will fetch all collections from firestore */
/** Async action (Thunk will throw dispatch if we return a function from the action) */
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    /** Get data from firebase, using subscription */
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

/** EXAMPLE OF DIFFERENT WAY OF USING FIRESTORE */
// const collectionRef = firestore.collection('collections');
// /** Get data from firebase, using subscription */
// collectionRef.onSnapshot(async (snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// });
/** Alternative way using Promises */
// collectionRef.get().then(snapshot => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   console.log(collectionsMap);
// })
/** Alternative way using URL (too nested objects we get this way) */
// fetch(
//   'https://firestore.googleapis.com/v1/projects/crown-be1fc/databases/(default)/documents/collections'
// )
//   .then((response) => response.json())
//   .then((collections) => console.log(collections));
