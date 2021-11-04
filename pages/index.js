import Link from "next/link";
export default function Home() {
	return (
		<div>
			<nav>
				<h1>This is navbar</h1>
			</nav>
			<Link href="/admin">admin</Link>
			<Link href="/login">login</Link>
		</div>
	);
}
