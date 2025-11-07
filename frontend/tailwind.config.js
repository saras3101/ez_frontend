/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
        island: ["Islands Moment", "cursive"],
      },
    },
  },
  plugins: [],
}
