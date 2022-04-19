import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA40FcrMbMjsUbxIeYtyYzatVfpImGQL1c",
	authDomain: "crwn-clothing-db-b63ed.firebaseapp.com",
	projectId: "crwn-clothing-db-b63ed",
	storageBucket: "crwn-clothing-db-b63ed.appspot.com",
	messagingSenderId: "923744861953",
	appId: "1:923744861953:web:45a7591ff7a8b14b6ce500",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
};