<<<<<<< HEAD
import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/compact/app';
=======
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
>>>>>>> 8b1805e2b342fb189a76be68781a7a18772203ef
// import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage} from 'firebase/storage'

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

// initialize cloud storage and get a reference to the service
// const db = getFirestore(firebaseapp);
// export const auth = getAuth (firebaseConfig)
const db = getFirestore(firebaseapp);

// initialize storage
const storage = getStorage(firebaseapp);

export { db, storage };
