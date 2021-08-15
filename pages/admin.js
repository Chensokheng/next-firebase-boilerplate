import React, { useRef } from "react";
import { withProtected } from "../src/hook/route";

function Admin({ auth, pathname }) {
	const confirmPassword = useRef();
	const password = useRef();

	const { logout, user, deleteAccount, updatePassword, error } = auth;

	const handleUpdatePassword = async (e) => {
		e.preventDefault();
		await updatePassword(confirmPassword.current.value, password.current.value);
	};

	return (
		<div>
			{error?.[pathname] && <h4 style={{ color: "red" }}>{error[pathname]}</h4>}

			<h1>{user.uid}</h1>
			<h1>{user.emailVerified ? "Verified" : "not verified"}</h1>

			<button onClick={deleteAccount}>delete my account</button>
			<button onClick={logout}>Logout</button>

			<form onSubmit={handleUpdatePassword}>
				<input type="password" ref={password} />

				<input type="password" ref={confirmPassword} />
				<button>update Password</button>
			</form>
		</div>
	);
}

export default withProtected(Admin);
