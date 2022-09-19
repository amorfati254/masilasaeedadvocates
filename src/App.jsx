import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import { LazyMotion } from "framer-motion";
const loadFeatures = () =>
	import("./helpers/framerAnimationModules.js").then((res) => res.default);
function App() {
	return (
		<LazyMotion features={loadFeatures}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</LazyMotion>
	);
}

export default App;
