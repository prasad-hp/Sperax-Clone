/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "new-gray" : "rgb(32,36,36)",
        "new-blue" : "#38c4bc"
      },
    },
  },
  plugins: [],
}