import React from "react";
import { withPublic } from "../src/hook/route";

function Login({ auth }) {
	const { user, loginWithGoogle, error } = auth;
	return (
		<div>
			{error && <h1>{error}</h1>}
			<button onClick={loginWithGoogle}>Google</button>
			<h1>{user?.uid}</h1>
		</div>
	);
}

export default withPublic(Login);
