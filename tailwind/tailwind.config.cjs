/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      'blue-grey': '#2E476B',
      'dark-grey': '#2D3134',
      'light-grey': '#676A6C',
      'divider-color': '#EAEAEB',
      'lightgrey-input': '#9498A4',
      'lightgrey-text': '#939597',
      'coral-color': '#F66F4D',
      'warm-white': '#FAF8ED',
      'white-color': '#FFFFFF',
      'grey-color': '#5B5F62',
      'warm-yellow': '#FFD482'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
