/** Get the user from Google Auth and pass it to firestore.
 * If user doesn't exist, create new user in DB
 * Then set state with new user
 */
// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//   if (userAuth) {
/** if user from Google auth isn't null, get the reference for him
 * from the firestore DB (if he doesn't exist there, this function will
 * create new user in DB)
 */
// const userRef = await createUserProfileDocument(userAuth);
/** Get data for the user from firestore DB and uodate state */
// @ts-ignore
//   userRef.onSnapshot((snapShot) => {
//     setCurrentUser({
//       id: snapShot.id,
//       ...snapShot.data(),
//     });
//   });
// } else {
/** Set state for null user */
//setCurrentUser(userAuth);
/** Code to add initialize items coleection in Firebase
 * (need to be executed once) */
// addCollectionAndDocuments(
//   'collections',
//   collectionsArray.map(({ title, items }) => ({ title, items }))
// );
// }
// });

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
