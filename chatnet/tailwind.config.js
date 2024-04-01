/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "red-button": "#d32f2f",
        "blue-button": "#006064",
        "red-button-hover": "#b71c1c",
        "blue-button-hover": "#004d40",
      },
      textColor:{
        "red-custom": "#d32f2f",
        "blue-custom": "#006064",
      }
    },
  },
  plugins: [],
};
