import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyDL4EHqb_Gz-u-U7Dn6hJho9_5Twt_rrcw",
  authDomain: "urban-riders.firebaseapp.com",
  databaseURL: "https://urban-riders.firebaseio.com",
  projectId: "urban-riders",
  storageBucket: "urban-riders.appspot.com",
  messagingSenderId: "685136183369"
};
firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;