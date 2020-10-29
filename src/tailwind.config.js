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
        "bg-gray-light": "#EFEFEF",
        "bg-gray-md": "#CFCFCF",
        "bg-gray-dk": "#26374A",
        "text-gray-dk": "#333333",
        "text-blue-link": "#2b4380",
        "text-sel-link": "#20535d2",
        "text-vist-link": "#7834bc",
        "text-red-err": "#d3080c",
      },
    },
  },
  variants: {},
  plugins: [],
};
