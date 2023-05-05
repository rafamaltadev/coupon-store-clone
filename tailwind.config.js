/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#a404c8",
        primaryColorDark: "#710b84",
        primaryColorLight: "#f5c8ff",
        primayBackground: "#f9e4ff",
        secondaryBackground: "#313131",
        primaryTextColor: "#313131",
        primaryTextColorDark: "#1a1a1a",
        primaryTextColorLight: "#515151",
      },
    },
  },
  plugins: [],
};
