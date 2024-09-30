import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
require('dotenv').config();

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "movies-list-308db.firebaseapp.com",
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: "movies-list-308db",
    storageBucket: "movies-list-308db.appspot.com",
    messagingSenderId: "295802677679",
    appId: "1:295802677679:web:68dfa756f05cf178fc675a"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(app);

console.log(database);

const moviesInDb = ref(database, 'movies')

const inputEl = document.getElementById('input-el')
const btnEl = document.getElementById('btn-el')

btnEl.addEventListener('click', (event) => {
    event.preventDefault()
    let inputValue = inputEl.value
    push(moviesInDb, inputValue)
    console.log(inputEl.value, "added to db")
})
