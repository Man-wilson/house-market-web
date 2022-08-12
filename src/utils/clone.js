import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

export const createCloneUser = async (uid, user) => {
	await setDoc(doc(db, 'users', uid), user);
};
