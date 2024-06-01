/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7963e0',
          DEFAULT: '#7963e0',
          dark: '#7963e0'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
