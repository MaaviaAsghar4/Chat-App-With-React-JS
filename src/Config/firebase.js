import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDapI6PNvUN7fwHqGyCVPVf7bv3UEUTi1w",
    authDomain: "react-chat-app-e41d9.firebaseapp.com",
    databaseURL: "https://react-chat-app-e41d9.firebaseio.com",
    projectId: "react-chat-app-e41d9",
    storageBucket: "react-chat-app-e41d9.appspot.com",
    messagingSenderId: "8389841456",
    appId: "1:8389841456:web:1241de33df5a8c4bfcd3f5",
    measurementId: "G-N6S739FLY3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;