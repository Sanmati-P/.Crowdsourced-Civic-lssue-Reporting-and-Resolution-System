/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- All your React source files
  ],
  theme: {
    extend: {}, // You can add custom colors, fonts, spacing, etc. here
  },
  plugins: [],
  darkMode: 'media', // or 'class' if you want to toggle dark mode manually
}


