/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary colors
        LightCyan: "#cee3e9",
        NeonGreen: "#52ffa8",

        // Neutral colors
        GrayishBlue: "#4e5d73",
        DarkGrayishBlue: "#323a49",
        DarkBlue: "#1f2632",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans - serif"],
      },
    },
    fontWeight: {
      extrabold: "800",
    },
  },
  plugins: [],
};
