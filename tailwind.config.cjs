/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'modal': 'rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        motif: "url('./src/assets/motif.png')"
      }
    },
  },
  plugins: [],
}