module.exports = {
	purge: ['index.html', 'style.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				poppins: 'var(--font-heading)',
				'open-sans': 'var(--font-body)',
			},
			colors: {
				'theme-pink': 'var(--color-pink)',
				'theme-pale-cyan': 'var(--color-pale-cyan)',
				'theme-dark-cyan': 'var(--color-dark-cyan)',
				'theme-grayish-blue': 'var(--color-grayish-blue)',
			},
			boxShadow: {
				'main-box': '0 1px 15px 1px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
