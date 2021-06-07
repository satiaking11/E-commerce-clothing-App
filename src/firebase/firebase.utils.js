import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxMv-KnG_D8_P9TNLSfBige0_Y2ki4ENQ",
    authDomain: "crwn-db-ecfa9.firebaseapp.com",
    projectId: "crwn-db-ecfa9",
    storageBucket: "crwn-db-ecfa9.appspot.com",
    messagingSenderId: "86656014683",
    appId: "1:86656014683:web:14891e1d05e366f6dba27e",
    measurementId: "G-5ESWVF9KMM"
};

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

