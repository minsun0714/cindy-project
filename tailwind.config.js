/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		colors: {
			mint: "#89E2E2",
			"gray-dark": "#273444",
			gray: "#8492a6",
			"gray-light": "#d3dce6",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
}
