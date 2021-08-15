import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState();

	const router = useRouter();
	const pathname = router.pathname;

	const loginWithGoogle = async () => {
		const { error, user } = await AuthService.loginWithGoogle();
		if (error) {
			setError({ [pathname]: error });
		}
		setUser(user ?? null);
	};

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};

	const createUserWithEmailAndPassword = async (email, password) => {
		if (email && password) {
			const { error, user } = await AuthService.createUserWithEmailAndPassword(
				email,
				password
			);
			if (error) {
				setError({ [pathname]: error });
				return;
			}
			setUser(user ?? null);
			router.push(`/verify?email=${email}`);
		} else {
			setError({ [pathname]: "Email and password can not be empty" });
		}
	};

	const signInUserWithEmailAndPassword = async (email, password) => {
		if (email && password) {
			const { error, user } = await AuthService.signInUserWithEmailAndPassword(
				email,
				password
			);
			if (error) {
				setError({ [pathname]: error });
				return;
			}
			setUser(user ?? null);
			router.push("/");
		} else {
			setError({ [pathname]: "Email and password can not be empty" });
		}
	};
	const resetPassword = async (email) => {
		if (email) {
			const error = await AuthService.resetPassword(email);
			if (error) {
				setError({ [pathname]: error });
				return;
			}
			router.push(`/verify?email=${email}`);
		} else {
			setError({ [pathname]: "Email can not be empty" });
		}
	};

	const deleteAccount = async () => {
		const error = await AuthService.deleteAccount();
		setError({ [pathname]: error });
	};

	const updatePassword = async (confirmPassword, password) => {
		if (confirmPassword === password) {
			const error = await AuthService.updatePassword(password);
			setError({ [pathname]: error });
		} else {
			setError({ [pathname]: "password doesn't match!" });
		}
	};

	const value = {
		user,
		error,
		loginWithGoogle,
		logout,
		setUser,
		createUserWithEmailAndPassword,
		signInUserWithEmailAndPassword,
		resetPassword,
		deleteAccount,
		updatePassword,
	};

	return <authContext.Provider value={value} {...props} />;
}
