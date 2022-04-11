import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZ0tL2QyxdIzHey94FMJHTnePkgvjblRU",
    authDomain: "linkedin-clone-2f496.firebaseapp.com",
    projectId: "linkedin-clone-2f496",
    storageBucket: "linkedin-clone-2f496.appspot.com",
    messagingSenderId: "307246759310",
    appId: "1:307246759310:web:b3df9d3c26ed79729738df"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};