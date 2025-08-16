/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				'dark-blue': '#0b1120',
				'light-blue': '#4F46E5',
				'accent-purple': '#7c3aed',
				'off-white': '#f7f8f8',
			},
			animation: {
				'meteor': 'meteor 5s linear infinite',
				'twinkle': 'twinkle 1.5s linear infinite',
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0',
					},
				},
				twinkle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
			},
		},
	},
	plugins: [],
};
