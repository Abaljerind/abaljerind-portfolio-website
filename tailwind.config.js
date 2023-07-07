/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(237, 78.8%, 25.9%)",
        darkestBlue: "hsl(222, 47.4%, 11.2%)",
        white: "hsl(0, 0%, 100%)",
        whiteSugar: "hsl(0, 0%, 98%)",
        littleGray: "hsl(210, 40%, 96.1%)",
        darkBlueAlpha: "hsla(237, 78.8%, 25.9%, 0.5)",
      },
      fontFamily: {
        hanken: "Hanken Grotesk",
      },
    },
  },
  plugins: [],
};
