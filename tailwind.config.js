/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0b132b',    // Very dark blue
          DEFAULT: '#1c2541', // Dark blue
          light: '#3a506b',   // Steel blue
        },
        accent: {
          blue: '#2563eb',    // primary action
          teal: '#0d9488',    // secondary action
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
