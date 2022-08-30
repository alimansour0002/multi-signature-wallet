import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyD8kqXZf9abL2C0CmVGKxDfGkl0fGZzqRs",
  
    authDomain: "multisig-wallet-b9b93.firebaseapp.com",
  
    projectId: "multisig-wallet-b9b93",
  
    storageBucket: "multisig-wallet-b9b93.appspot.com",
  
    messagingSenderId: "788796266230",
  
    appId: "1:788796266230:web:12d78e1dfb5e9a79a57ed7",
  
    measurementId: "G-VLDEQF5P19"
  
  };
  
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

