/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgblue: {
          100: '#1d4ed8',
          200: '#3c1dd7'       
        },
        bgred: '#fffbd5',
        bgtan: '#b20a2c',
        
      }
    },
  },
  plugins: [],
}
