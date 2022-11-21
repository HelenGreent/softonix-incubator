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
      // gray: '#6b7280',
      'link-color': '#2E476B',
      'primary-text-color': '#5B5F62',
      'primary-header-color': '#2D3134',
      'lightgrey-text-color': '#9498A4',
      'lightgrey-text-span-color': '#939597',
      'accent-coral-color': '#F66F4D',
      'white-color': '#FAF8ED',
      'bg-white-color': '#FFFFFF',
      'footer-header-color': '#2D3134',
      'footer-text-color': '#676A6C'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      logo: ['Sen', 'sans-serif'],
      nav: ['Poppins', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
