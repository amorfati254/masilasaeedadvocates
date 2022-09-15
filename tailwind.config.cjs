/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Lato", "sans-serif"],
			},
			backgroundImage: {
				"home-hero-pattern":
					"linear-gradient(90deg, rgba(11, 18, 27, 0.9)0%, rgba(11, 18, 27, 0.7)50%), url('https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/Kenya_high_court.webp')",
				"about-hero-pattern":
					"linear-gradient(90deg, rgba(11, 18, 27, 0.9)0%, rgba(11, 18, 27, 0.7)50%), url('https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/footeroptimised.webp')",
				"services-hero-pattern":
					"linear-gradient(90deg, rgba(11, 18, 27, 0.9)0%, rgba(11, 18, 27, 0.7)50%), url('https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/women-justice-symbol.webp')",
			},
			colors: {
				primary: {
					DEFAULT: "#9F8F60",
				},
				secondary: {
					DEFAULT: "#1F1F1F",
					light: "#6E6E6E",
					dark: "#1A1A1A",
				},
			},
		},
		plugins: [],
	},
};
