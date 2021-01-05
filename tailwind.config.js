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
                light: '#0D0033',
                DEFAULT: '#08001F',
                dark: '#03000A',
            },
        },
        extend: {
            spacing: {
                '18': '4.5rem',
            },
            width: {
                '2/1': '200%',
            },
            height: {
                '2/1': '200%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        
    ],
}
