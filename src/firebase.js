import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBl4WAqqz4KULSapHPjo10WdeicMwWvdQw',
  authDomain: 'whatsapp-clone-7c568.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-7c568.firebaseio.com',
  projectId: 'whatsapp-clone-7c568',
  storageBucket: 'whatsapp-clone-7c568.appspot.com',
  messagingSenderId: '843164206469',
  appId: '1:843164206469:web:6a58a4e02d454cec5df0ec',
  measurementId: 'G-R6PEKK2CWG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
