module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    fontFamily: {
      display: ["Lato", "sans-serif"],
      body: ["Noto", "sans-serif"],
    },
    extend: {
      width: {
        72: "20rem",
        80: "24rem",
      },
      colors: {
        // Background colors
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "bg-gray-dk": "#26374A",
        "header-blue": "#38414d",
        "footer-blue": "#26374a",
        "footer-white": "#f8f8f8",
        "h1-underline-color": "#af3c43",
        "canada-ca-link-colour": "#284162",
        // Text Colors
        "text-gray-dk": "#333333",
        "blue-link": "#2b4380",
        "sel-link": "#20535d2",
        "vist-link": "#7834bc",
        "red-err": "#d3080c",
      },
      backgroundImage: {
        "footer-parliament-image": "url(./assets/images/landscape.png)",
      },
    },
  },
  variants: {},
  plugins: [],
};
