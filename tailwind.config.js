const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.jsx'],
    darkMode: 'media',
    theme: {
        colors: {
            red: {
                100: '#F8E6E0',
                200: '#F5BCA9',
                300: '#FA8258',
                400: '#FF4000',
                500: '#B43104',
                600: '#61210B',
                700: '#2A120A',
            },
            green: {
                100: '#E6F8E0',
                200: '#BCF5A9',
                300: '#82FA58',
                400: '#00FF40',
                500: '#31B404',
                600: '#21610B',
                700: '#122A0A',
            },
            blue: {
                100: '#E0F2F7',
                200: '#CEE3F6',
                300: '#819FF7',
                400: '#0000FF',
                500: '#08298A',
                600: '#0B0B3B',
                700: '#120A2A',
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
