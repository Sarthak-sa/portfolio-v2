import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WorkProject from "./pages/WorkProject";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/work/:slug" element={<WorkProject />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
