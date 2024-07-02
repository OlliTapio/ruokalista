/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        snackbar: {
          '-webkit-animation': 'fadein 0.5s, fadeout 0.5s 2.5s;',
          'animation': 'fadein 0.5s, fadeout 0.5s 2.5s',
        }
      }
    },
  },
  plugins: [],
}