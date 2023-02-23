/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      deepskyblue: "#47b2e4",
      steelblue: "#37517e",
      gray: "#7d7c7c",
      dimgray100: "#4f4f4f",
      dimgray200: "#524a4e",
      ghostwhite: "#f3f5fa",
      gainsboro: "#d9d9d9",
      cornflowerblue: "#6a94dd",
      black: "#000",
      whitesmoke: "#f5f5f5",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontWeight: {
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      "extra-bold": "800",
      black: "900",
    },
    fontSize: {
      sm: "10px",
      base: "12px",
      lg: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "32px",
      "5xl": "36px",
      "6xl": "40px",
    },
    extend: {
      borderRadius: {
        "3xs": "4px",
        "2xs": "5px",
        xs: "6px",
        sm: "20px",
        md: "29px",
        lg: "38px",
        xl: "50px",
        "2xl": "57px",
      },
    },
  },
  plugins: [],
};
