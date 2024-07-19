import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnKdC0vFqmpfm5HNsnlZknVAqmu-izN5M",
  authDomain: "instagram-clone-a77e7.firebaseapp.com",
  projectId: "instagram-clone-a77e7",
  storageBucket: "instagram-clone-a77e7.appspot.com",
  messagingSenderId: "987552469903",
  appId: "1:987552469903:web:96b32ad2a5d21279d1f1fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
