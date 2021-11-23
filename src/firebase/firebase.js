import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCykxDM2d6m-yCREBSIbx9M0Q9Zlzx8a1Q",
    authDomain: "crwn-db-44c43.firebaseapp.com",
    projectId: "crwn-db-44c43",
    storageBucket: "crwn-db-44c43.appspot.com",
    messagingSenderId: "13129995397",
    appId: "1:13129995397:web:44943244ac49cf1f0185ec",
    measurementId: "G-2XJKMGVXYB"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;