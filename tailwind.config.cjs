/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#feeaea",
          100: "#fdd4d4",
          200: "#fcbfbf",
          300: "#fba9a9",
          400: "#fa9494",
          500: "#f87e7f",
          600: "#f76969",
          700: "#f65354",
          800: "#f53e3e",
          900: "#f42829",
          950: "#dc2425",
          1000: "#c32021",
        },
        secondary: {
          50: "#e6ecff",
          100: "#ccd8ff",
          200: "#b3c5ff",
          300: "#99b1ff",
          400: "#809eff",
          500: "#668aff",
          600: "#4d77ff",
          700: "#3363ff",
          800: "#1a50ff",
          900: "#003cff",
          950: "#0036e6",
          1000: "#0030cc",
        },
        pink: {
          50: "#ffe6f3",
          100: "#fecce6",
          200: "#feb3da",
          300: "#fd99cd",
          400: "#fd80c1",
          500: "#fc66b4",
          600: "#fc4da8",
          700: "#fb339b",
          800: "#fb1a8f",
          900: "#fa0082",
          950: "#e10075",
          1000: "#c80068",
        },
      },
      fontFamily: {
        heading: "var(--heading-font)",
        sans: "var(--sans-font)",
        serif: "var(--serif-font)",
      },
      boxShadow: {
        focus: "0px 0px 2px 3px #8ec2ed",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
