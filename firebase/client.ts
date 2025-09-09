import { initializeApp , getApp , getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBixNDxM-fogjpPVWFyEediSO4vLKDBPYE",
    authDomain: "prepwell-37f5d.firebaseapp.com",
    projectId: "prepwell-37f5d",
    storageBucket: "prepwell-37f5d.firebasestorage.app",
    messagingSenderId: "330275010135",
    appId: "1:330275010135:web:40ffa33704327914515512",
    measurementId: "G-JKH68M6M67"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
