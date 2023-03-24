// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnWaqZuwahYKrlpCOz6XxKZ8iwF2AGskg",
  authDomain: "react-clothing-2197a.firebaseapp.com",
  projectId: "react-clothing-2197a",
  storageBucket: "react-clothing-2197a.appspot.com",
  messagingSenderId: "452062679104",
  appId: "1:452062679104:web:76741183b69e223331cfa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const GoogleSignIn = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocsFromAuth = async (userAuth, aditionalInformation={}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }
  return userDocRef;
};

export const basicAuth = async (email, password) => {
 if(!email || !password) return

 return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInBasicAuth = async (email, password) => {
  if(!email || !password) return
 
  return await signInWithEmailAndPassword(auth, email, password)
 }

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
