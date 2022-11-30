import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  REACT_API_KEY,
  REACT_AUTH_DOMAIN,
  REACT_PROJECT_ID,
  REACT_STORAGE_BUCKET,
  REACT_MESSAGING_SENDER_ID,
  REACT_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: REACT_API_KEY,
  authDomain: REACT_AUTH_DOMAIN,
  projectId: REACT_PROJECT_ID,
  storageBucket: REACT_STORAGE_BUCKET,
  messagingSenderId: REACT_MESSAGING_SENDER_ID,
  appId: REACT_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
