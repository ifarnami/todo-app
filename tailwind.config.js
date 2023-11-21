/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        primary: "#6C63FF",
        secondary: "#534CC2",
        light: "#DBD9F9",
      },
      white: {
        primary: "#F7F7F7",
      },
      black: {
        primary: "#252525",
      },
      red: {
        danger: "#E50000",
      },
      gray: "#CDCDCD",
      green: "#3CCF4E",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
