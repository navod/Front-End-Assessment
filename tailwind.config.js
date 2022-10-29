/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jungka_bold: "Junka-Bold,cursive",
        jungka_book: "Junka-Book,cursive",
        jungka_medium_regular: "Junka-Medium-Regular,cursive",
        jungka_regular: "Junka-Regular,cursive",
      },
    },
  },
  plugins: [],
};
