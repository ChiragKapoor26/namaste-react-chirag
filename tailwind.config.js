/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lucida: [
          '"Lucida Sans"',
          '"Lucida Sans Regular"',
          '"Lucida Grande"',
          '"Lucida Sans Unicode"',
          'Geneva',
          'Verdana',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

