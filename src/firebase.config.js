// import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app';
// import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA6nd30IKuoEVXnCWGtbTYdp9_2bMMIlkQ',
	authDomain: 'house-marketplace-app-847d4.firebaseapp.com',
	projectId: 'house-marketplace-app-847d4',
	storageBucket: 'house-marketplace-app-847d4.appspot.com',
	messagingSenderId: '134105121512',
	appId: '1:134105121512:web:b1eee64765b985a2f03f5d',
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseapp);
// export const auth = getAuth (firebaseConfig)
export const db = getFirestore(firebaseapp);
