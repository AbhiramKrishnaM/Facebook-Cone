import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4oTMSHbDv-qtF8b8-93ZybwXWjTh7vR4",
    authDomain: "facebook-clone-583e5.firebaseapp.com",
    projectId: "facebook-clone-583e5",
    storageBucket: "facebook-clone-583e5.appspot.com",
    messagingSenderId: "195034274812",
    appId: "1:195034274812:web:197b9f76c866b22ad1f079"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;