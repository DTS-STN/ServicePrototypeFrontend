module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      fontSize: {
        counter: "175px",
      },
      width: {
        72: "20rem",
        80: "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
