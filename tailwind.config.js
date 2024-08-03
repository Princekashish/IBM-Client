/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/banner2.png')",
        'feedback': "url('/image496.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}