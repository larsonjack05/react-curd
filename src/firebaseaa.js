import * as firebase from "firebase";
import "firebase/database";
import firestore from 'firebase/firestore'


let config = {
	apiKey: "AIzaSyBIMB4OHcsZzRdanXo4YxQXTnMSdCcRNpc",
    authDomain: "todo-app-tutorial-001.firebaseapp.com",
    databaseURL: "https://todo-app-tutorial-001.firebaseio.com",
    projectId: "todo-app-tutorial-001",
    storageBucket: "todo-app-tutorial-001.appspot.com",
    messagingSenderId: "418995334752",
    appId: "1:418995334752:web:79ec08ab0ed98c15fa9d05"
};

firebase.initializeApp(config);

export default firebase.database();
firebase.initializeApp(config);
