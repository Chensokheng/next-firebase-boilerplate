import { useRouter } from "next/router";
import React from "react";
import { withPublic } from "../src/hook/route";

const Verify = () => {
	const router = useRouter();

	const { email } = router.query;

	return (
		<div>
			<h1>Please check your email. send to this email {email}</h1>
		</div>
	);
};

export default withPublic(Verify);
