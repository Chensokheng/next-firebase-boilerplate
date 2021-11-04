import { useRouter } from "next/dist/client/router";
import React from "react";
import useAuth from "../hook/auth";

export default function AppLayout({ children }) {
	const auth = useAuth();

	const router = useRouter();

	if (router.pathname !== "/login") {
		return (
			<main>
				<nav
					style={{
						background: "blue",
						color: "white",
						padding: "10px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span>This is default layout</span>
					<span>{auth.user?.displayName}</span>
				</nav>
				{children}
			</main>
		);
	} else {
		return children;
	}
}
