/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#D9D9D9',
				secondary: '#000000',
				accent: '#F50187',
				'accent-darker' : '#dd0478' 
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif']
			},
		},
	},
	plugins: [],
}
