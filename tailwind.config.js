export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/404.html",
    "./build/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "global": {
            0: "#8bc34a",
            1: "#7baf42",
            2: "#111111",
            3: "#333333",
            4: "#f8f6f3",
            5: "#ffffff",
            6: "#001524",
            7: "#424242",
            8: "#000000"
        }
      },
      fontFamily: {
        mons: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "normal"],
      },
    },
  }
};