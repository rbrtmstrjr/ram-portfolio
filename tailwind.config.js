/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hand: ["Just Another Hand", "cursive"],
      },
      colors: {
        light: {
          100: "#F7EAFF",
          200: "#8B51A8",
          300: "#AD91EC",
          400: "#4A1964",
          500: "#A279FF",
        },
        superlight: "#FBF3FF",
      },
      borderWidth: {
        DEFAULT: "1.5px",
      },
    },
  },
  plugins: [],
};
