import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAtjmu0pq1hzCD_EnIl43KgLTb0P2WibcA",
    authDomain: "a212app.firebaseapp.com",
    databaseURL: "https://a212app-default-rtdb.firebaseio.com",
    projectId: "a212app",
    storageBucket: "a212app.appspot.com",
    messagingSenderId: "764902993816",
    appId: "1:764902993816:web:44e958b12fa406d46245ed",
    measurementId: "G-4YWNL34N6M"
};

export const app = initializeApp(firebaseConfig);