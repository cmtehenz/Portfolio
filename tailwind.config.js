/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Merriweather Sans, sans-serif'
      },
      colors: {
        gray: {
          900: '#22212C',
          600: '#302F3D',
          400: '#837E9F'
        },
        rosa: {
          500: '#CB92B1'
        }
      }
    },
  },
  plugins: [],
}
