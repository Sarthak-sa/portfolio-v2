import { Outlet, useMatch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroBackground from "./HeroBackground";
import ScrollToHash from "./ScrollToHash";

export default function Layout() {
	const projectDetail = useMatch("/work/:slug");

	return (
		<div className="relative flex min-h-screen flex-col">
			<HeroBackground />
			<ScrollToHash />
			<Navbar minimal={Boolean(projectDetail)} />
			<main className="relative z-10 flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
