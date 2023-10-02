/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'ocean-blue': {
					100: '#A2D0F0',
					200: '#84BAE4',
					300: '#6AA2D6',
					400: '#538AC4',
					500: '#3F72AF',
					600: '#336097',
					700: '#274F7E',
					800: '#1D3D64',
					900: '#142C49',
				},
				"mint-green" : "#A5EFB6",
				"dark-blue" : "#344F6F",
				"pale-green" : "#DBE2EF",
				"very-pale-green" : "#E8F6EF"
			},
			fontFamily: {
				'vietnam': ['Be Vietnam Pro','sans-serif'],
			},
			backgroundImage: {
				'hamburger-icon': "url('/images/icon-hamburger.svg')",
				'close-icon': "url('/images/icon-close.svg')",
			},
		},
	},
	plugins: [],
}