const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      paginationColor: "#4A58EC",
       
      },
    },
    screens:{
      xs : "320px",
      sm : "375px",
      sml : "500px",
      md : "667px",
      mdl : "768px",
      lg : "960px",
      lgl: "1024px",
      xl : "1400px"
    },
  },
  plugins: [],
});
