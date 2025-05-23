/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#67362D",
        darkblue: "#35465F",
        lightblue: "#B7CBD4",
        beige: "#F5F5F2",
        white: "#FFFF",
        orange: "#DBA581",
      },
      height: {
        20: "20px",
        25: "35px",
        30: "30px",
        35: "35px",
        40: "40px",
        50: "50px",
        75: "75px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
      },
      width: {
        20: "20px",
        25: "25px",
        35: "35px",
        50: "50px",
        75: "75px",
        90: "90px",
        100: "100px",
        150: "150px",
        200: "200px",
        300: "300px",
        320: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        700: "700px",
      },
      minHeight: {
        100: "100px",
        200: "200px",
        300: "300px",
      },
      maxHeight: {
        300: "300px",
        400: "400px",
        500: "500px",
      },
      minWidth: {
        100: "100px",
        200: "200px",
      },
      maxWidth: {
        400: "400px",
        600: "600px",
        800: "800px",
      },
      borderRadius: {
        12: "12px",
        15: "15px",
        100: "100%",
      },
      screens: {
        xs: "400px",
        sm: "680px",
        md: "888px",
        lg: "1284px",
        xl: "1536px",
      },

      keyframes: {
        "fade-in-up": {
          "10%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
      },
    },
  },
};
