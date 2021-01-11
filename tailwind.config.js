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
                light: '#EEF7FF',
                DEFAULT: '#DDEEFF',
                dark: '#CCE7FF',
            },
            indigo: {
                light: '#003366',
                DEFAULT: '#002244',
                dark: '#001122',
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
            },
            boxShadow: {
                '3xl': '0 0 10px rgba(0,0,0,1)',
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ['dark'],
        },
    },
    plugins: [],
}
