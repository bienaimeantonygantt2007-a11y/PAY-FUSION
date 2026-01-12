// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWSmxal-nrATp0J536tHcS6e9EHhNP3jI",
  authDomain: "pay-fusion-haiti.firebaseapp.com",
  projectId: "pay-fusion-haiti",
  storageBucket: "pay-fusion-haiti.firebasestorage.app",
  messagingSenderId: "699710501026",
  appId: "1:699710501026:web:edcf4ab70601b46c3867fb",
  measurementId: "G-4CJLNWV26B"
};

// Initialisation
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Note : Pour le stockage d'images sans Firebase Storage, 
// nous utiliserons une conversion Base64 pour stocker les preuves dans Firestore.