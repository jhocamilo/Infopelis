import firebase from 'firebase'

const config ={

    apiKey: "AIzaSyBkBruaPO-IXm8FYLwe9NaD-oYvkonnc9Y",
    authDomain: "infopelis-528c7.firebaseapp.com",
    databaseURL: "https://infopelis-528c7.firebaseio.com",
    projectId: "infopelis-528c7",
    storageBucket: "infopelis-528c7.appspot.com",
    messagingSenderId: "742891695946",
    appId: "1:742891695946:web:85b1ca44872f0a7d901bb3",
    measurementId: "G-V9XWPM9K61"

}
firebase.initializeApp(config);

export default firebase;