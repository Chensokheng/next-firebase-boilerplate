import "../styles/globals.css";
import "../src/config/firebase.config";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";
import AppLayout from "../src/layout/AppLayout";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<AppLayout>
				<AuthStateChanged>
					<Component {...pageProps} />
				</AuthStateChanged>
			</AppLayout>
		</AuthProvider>
	);
}

export default MyApp;
