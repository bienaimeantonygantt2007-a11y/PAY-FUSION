const firebaseConfig = {
  apiKey: "AIzaSyA0Aqy9keUMZb_FSqW7qdg0RYxlpO5gGmw",
  authDomain: "pay-fusion-509.firebaseapp.com",
  projectId: "pay-fusion-509",
  storageBucket: "pay-fusion-509.firebasestorage.app",
  messagingSenderId: "401434428368",
  appId: "1:401434428368:web:c1f526254f63fa57402fd5",
  measurementId: "G-JN41S8MKWH"
};

// Initialisation
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Note : Pour le stockage d'images sans Firebase Storage, 
// nous utiliserons une conversion Base64 pour stocker les preuves dans Firestore.