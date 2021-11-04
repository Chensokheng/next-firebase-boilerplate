import Link from "next/link";
export default function Home() {
	return (
		<div>
			<Link href="/admin">admin</Link>
			<Link href="/login">login</Link>
		</div>
	);
}
