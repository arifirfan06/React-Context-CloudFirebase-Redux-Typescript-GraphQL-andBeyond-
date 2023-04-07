import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

// make sure its written correctly
const firebaseConfig = {
  apiKey: "AIzaSyDnWaqZuwahYKrlpCOz6XxKZ8iwF2AGskg",
  authDomain: "react-clothing-2197a.firebaseapp.com",
  projectId: "react-clothing-2197a",
  storageBucket: "react-clothing-2197a.appspot.com",
  messagingSenderId: "452062679104",
  appId: "1:452062679104:web:76741183b69e223331cfa5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionDocs = async (collectionKey, objectsDocAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsDocAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase())
    batch.set(docRef, obj)

  })
  await batch.commit();
  console.log('batch done')
}

export const getCategory = async () => {
const collectionRef = collection(db, 'category')
const q = query(collectionRef)

const querySnapshot = await getDocs(q)
return querySnapshot.docs.map(qSnap => qSnap.data())
// const categoryMap = querySnapshot.docs.reduce((accumulate, docSnapshot) => {
//   const {title, items} = docSnapshot.data();
//   accumulate[title.toLowerCase()] = items;
//   return accumulate
// }, {})
// return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
