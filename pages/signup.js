import Link from "next/link";
import React, { useRef } from "react";
import { withPublic } from "../src/hook/route";

const Signup = ({ auth, pathname }) => {
	const { createUserWithEmailAndPassword, error } = auth;

	const email = useRef();
	const password = useRef();

	const signup = async (e) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(
			email.current.value,
			password.current.value
		);
	};
	return (
		<div>
			{error?.[pathname] && <h4 style={{ color: "red" }}>{error[pathname]}</h4>}

			<form onSubmit={signup}>
				<input type="email" ref={email} />
				<input type="password" ref={password} />
				<button>Sign up</button>
			</form>
			<Link href="/login">login</Link>
		</div>
	);
};

export default withPublic(Signup);
