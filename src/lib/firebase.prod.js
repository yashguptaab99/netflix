import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGmAfKP9acCXmAoAzkiC10RErYw3Y_yVY",
    authDomain: "netflix-clone-5433c.firebaseapp.com",
    projectId: "netflix-clone-5433c",
    storageBucket: "netflix-clone-5433c.appspot.com",
    messagingSenderId: "476324118885",
    appId: "1:476324118885:web:3100a4f49b6ed85a1a218c",
};

const firebase = Firebase.initializeApp(config);


export{ firebase };