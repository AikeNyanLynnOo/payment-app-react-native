/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#00000",
          // 100: "#",
          // 200: "#",
        },
        mint: {
          DEFAULT: "#4AD8DA",
          // 100: "#",
          // 200: "#",
        },
        gray: {
          DEFAULT: "#808080",
          100: "#CDCDCD",
          200: "#8F8F8F",
        },
      },
      fontFamily: {
        fcregular: ["FC_Subject-Rounded_Regular", "sans-serif"],
        fcbold: ["FC_Subject-Rounded_Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
