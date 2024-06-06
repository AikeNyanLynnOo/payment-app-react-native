/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#000000",
          // 100: "#",
          15: "#00000026",
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
          300: "#E6E3E6",
        },
      },
      fontFamily: {
        fcregular: ["FC_Subject-Rounded_Regular", "sans-serif"],
        fcbold: ["FC_Subject-Rounded_Bold", "sans-serif"],
      },
    },
    fontSize: {
      xs: "10px",
      sm: "13px",
      base: "15px",
      xl: "16px",
      "2xl": "17px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
    },
  },
  plugins: [],
};
