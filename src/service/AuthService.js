import firebase from "firebase/app";
import "firebase/auth";

export const AuthService = {
	loginWithGoogle: async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().signInWithPopup(provider);
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
	logout: async () => {
		await firebase.auth().signOut();
	},
};
