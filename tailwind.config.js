const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: theme => ({
                ...theme('colors'),
                'menu-first': '#85bb3f',
                'menu-second': '#548e00',
            }),
            colors: {
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal
            },
            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}