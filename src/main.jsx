import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyq8eYgD2VSf6laE8LTqsleai4O91TmQs",
  authDomain: "beerme-e7b56.firebaseapp.com",
  projectId: "beerme-e7b56",
  storageBucket: "beerme-e7b56.appspot.com",
  messagingSenderId: "954855079866",
  appId: "1:954855079866:web:927421308afa9e38186783"
};

// Initialize Firebase
 initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
