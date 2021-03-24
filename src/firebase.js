import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCsNftvJfleZ02olsazgI-Jonv5u7Ukm_8',
    authDomain: 'discord-clone-52798.firebaseapp.com',
    projectId: 'discord-clone-52798',
    storageBucket: 'discord-clone-52798.appspot.com',
    messagingSenderId: '539114350987',
    appId: '1:539114350987:web:22cd43fa04cfa2539d678e',
    measurementId: 'G-EW435TLY6J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
