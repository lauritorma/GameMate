import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqMsKImgfRGRR-HtFEhKldnIcXaoUSvZg",
    authDomain: "gamemate-8ea73.firebaseapp.com",
    projectId: "gamemate-8ea73",
    storageBucket: "gamemate-8ea73.appspot.com",
    messagingSenderId: "517245450172",
    appId: "1:517245450172:web:8e19211043640069cdddb9",
    measurementId: "G-EY05RPHQ99"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)