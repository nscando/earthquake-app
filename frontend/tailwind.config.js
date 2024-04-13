/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#ec4899',
        tertiary: '#facc15',
        'dark-background': '#1f2937',
        'dark-text': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
