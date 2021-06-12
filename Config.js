import * as firebase from 'firebase';

require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAxfwfK5E_Y4Su3coY4Cny14Nf9yAdzfEk",
    authDomain: "project-73-5ec81.firebaseapp.com",
    projectId: "project-73-5ec81",
    storageBucket: "project-73-5ec81.appspot.com",
    messagingSenderId: "119880346408",
    appId: "1:119880346408:web:c79b99a9b7e27cd6e73e1d"
  };

  firebase.initializeApp(firebaseConfig);
export default firebase.firestore() 