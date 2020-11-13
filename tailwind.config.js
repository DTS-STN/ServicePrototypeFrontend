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
        // Text Colors
        "text-gray-dk": "#333333",
        "blue-link": "#2b4380",
        "sel-link": "#20535d2",
        "vist-link": "#7834bc",
        "red-err": "#d3080c",
      },
    },
  },
  variants: {},
  plugins: [],
};
