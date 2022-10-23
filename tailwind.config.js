/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // add font family ibm plex sans
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        // add Inter font family
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
