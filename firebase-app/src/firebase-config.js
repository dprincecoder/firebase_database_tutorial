// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDvbVZQDkbVWbdelQam7lfGCFV0r_tDjd4',
	authDomain: 'fir-auth-9b91e.firebaseapp.com',
	projectId: 'fir-auth-9b91e',
	storageBucket: 'fir-auth-9b91e.appspot.com',
	messagingSenderId: '132948710041',
	appId: '1:132948710041:web:a84e734a149b2ecf3dde08',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
