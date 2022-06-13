import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { query, collection, where } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import googleIcon from '../assets/svg/googleIcon.svg';
import { async } from '@firebase/util';

function Oauth() {
	const navigate = useNavigate();
	const location = useLocation();

	const onGoogleClick = async () => {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			// const user = result.user;

			// check user in the database
			// const docRef = doc(db, 'users', user.uid);
			// const docSnap = await getDoc(docRef);

			// console.log('doc', docSnap);

			// check if the user exists if he doesn't exist, create user
			// if (!docSnap.exists()) {
			// 	await setDoc(doc(db.app, 'users', user.uid), {
			// 		name: user.displayName,
			// 		email: user.email,
			// 		timestamp: serverTimestamp(),
			// 	});
			// }

			navigate('/');
		} catch (error) {
			toast.error('Could not authorise with Google');
		}
	};

	return (
		<div className='socialLogin'>
			<p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
			<button className='socialIconDiv' onClick={onGoogleClick}>
				<img className='socialIconImg' src={googleIcon} alt='google' />
			</button>
		</div>
	);
}

export default Oauth;
