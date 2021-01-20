import firebaseConfig from "./../../../firebase.json";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.lenght) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export default firebase;