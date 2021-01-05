module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: (theme) => ({
        search: "url('/src/icons/search.svg')",
      }),
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
      cursor: ["hover", "focus"],
      padding: ["focus"],
    },
  },
  plugins: [require("@neojp/tailwindcss-mix-blend-mode-utilities")],
};
