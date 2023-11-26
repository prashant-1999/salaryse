module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_33: "#ffffff33",
          A700_99: "#ffffff99",
          A700_cc: "#ffffffcc",
          A700: "#ffffff",
        },
        gray: { 900: "#262424" },
        lime: { A200: "#eeff41" },
        cyan: { 300: "#4accdf" },
        black: {
          900: "#000000",
          "900_01": "#030202",
          "900_33": "#00000033",
          "900_00": "#00000000",
        },
        indigo: { 700: "#292bad", A700: "#3e42fa", A700_01: "#3d41fa" },
      },
      fontFamily: { notosans: "Noto Sans" },
      backgroundImage: {
        gradient: "linear-gradient(135deg ,#eeff41,#3d41fa)",
        gradient1: "linear-gradient(0deg ,#000000,#00000000)",
        gradient2: "linear-gradient(180deg ,#262424,#030202)",
        gradient3: "linear-gradient(315deg ,#292bad,#3d41fa)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
