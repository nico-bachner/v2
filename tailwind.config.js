const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.jsx'],
    darkMode: 'media',
    theme: {
        colors: {
            red: {
                DEFAULT: '#CC0000',
            },
            green: {
                DEFAULT: '#82FA58',
            },
            cyan: {
                light: '#F5FAFF',
                DEFAULT: '#E0F0FF',
                dark: '#CCE5FF',
            },
            indigo: {
                light: '#1C0070',
                DEFAULT: '#0E0038',
                dark: '#03000A',
            },
        },
        extend: {
            spacing: {
                '18': '4.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
