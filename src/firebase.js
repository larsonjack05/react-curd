import * as firebase from "firebase";
import "firebase/database";

let config = {
	 apiKey: "AIzaSyAF_cALG-5CNa1SwTO7tl8fo_Ql2r1jZBc",
    authDomain: "tableapp-abed6.firebaseapp.com",
    databaseURL: "https://tableapp-abed6.firebaseio.com",
    projectId: "tableapp-abed6",
    storageBucket: "tableapp-abed6.appspot.com",
    messagingSenderId: "953567323024",
    appId: "1:953567323024:web:c35c33ef17d9631c358915"
};

firebase.initializeApp(config);

export default firebase.database();