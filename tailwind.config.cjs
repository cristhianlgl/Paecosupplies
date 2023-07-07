/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			slate: colors.slate,
			'primary': {
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

		},
	},
	plugins: [],
}