import React, { useRef } from "react";
import { withPublic } from "../src/hook/route";
import Link from "next/link";

function Login({ auth, pathname }) {
	const email = useRef();
	const password = useRef();

	const {
		loginWithGoogle,
		resetPassword,
		signInUserWithEmailAndPassword,
		error,
	} = auth;

	const login = async (e) => {
		e.preventDefault();
		await signInUserWithEmailAndPassword(
			email.current.value,
			password.current.value
		);
	};

	return (
		<div>
			{error?.[pathname] && <h4 style={{ color: "red" }}>{error[pathname]}</h4>}

			<button onClick={loginWithGoogle}>Google</button>

			<h1>Login with email and password</h1>
			<form onSubmit={login}>
				<input type="email" ref={email} />
				<input type="password" ref={password} />
				<button>login</button>
			</form>
			<button onClick={async () => await resetPassword(email.current.value)}>
				Forgot password
			</button>
			<Link href="/signup">signup</Link>
		</div>
	);
}

export default withPublic(Login);
