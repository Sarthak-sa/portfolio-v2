import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
	const { hash, pathname } = useLocation();

	useEffect(() => {
		if (hash && pathname === "/") {
			const id = hash.replace("#", "");
			const timer = setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 100);

			return () => clearTimeout(timer);
		}

		window.scrollTo(0, 0);
	}, [hash, pathname]);

	return null;
}
