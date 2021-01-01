const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.jsx'],
    darkMode: 'media',
    theme: {
        extend: {
            spacing: {
                '18': '4.5rem',
            },
            colors: {
                navy: {
                    light: '#172a45',
                    DEFAULT: '#0a192f',
                    dark: '#020c1b',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
