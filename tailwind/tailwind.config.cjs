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
      primary: ' #E5E5E5',
      'blue-grey': '#2E476B',
      'primary-text-color': '#5B5F62',
      'primary-header-color': '#2D3134',
      'lightgrey-text-color': '#9498A4',
      'lightgrey-text-span-color': '#939597',
      'coral-color': '#F66F4D',
      'white-color': '#FAF8ED',
      'bg-white-color': '#FFFFFF',
      'grey-color': '#5B5F62',
      'warm-yellow': '#FFD482',
      'dark-grey': '#2D3134',
      'light-grey': '#676A6C'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
      nav: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
