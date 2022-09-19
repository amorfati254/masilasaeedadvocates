import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./helpers/SEO";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SEO
			title="Masila Saeed Advocates"
			description="Best Law firm in Mombasa that guarantees all your legal needs are fulfilled and satisfied"
		/>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
