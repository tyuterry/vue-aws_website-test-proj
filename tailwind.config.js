/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "45px": "45px",
        "50px": "50px",
      },
      colors: {
        txtPaimary: "#ddd",
        txtWhite: "#fff",
        txtDark: "#333",
        txtActive: "#f8991d",
        txtHighlight: "#0972d3",
        txtHighlightActive: "#033160",
        txtGray: "#b5b5b5",
        bgDark: "#232f3e",
        bgWhite: "#ffffff",
        bgLight: "#f1f4f6",
        themeColor: "#ec7211",
        themeColorActive: "#eb5f07",
      },
    },
  },
  plugins: [],
};
