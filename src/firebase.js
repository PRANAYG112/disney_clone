import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC70rn2vFWSDwVFbXk2EFGY2X2D1nb9AQE",
    authDomain: "disneyclone-fe9ea.firebaseapp.com",
    projectId: "disneyclone-fe9ea",
    storageBucket: "disneyclone-fe9ea.appspot.com",
    messagingSenderId: "852995552060",
    appId: "1:852995552060:web:b0f3095b166ba9bb09e439",
    measurementId: "G-BLZ7QMKZE4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth,provider ,storage };
export default db;
