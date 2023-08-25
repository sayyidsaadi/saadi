/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        container: "90%",
      },
      colors: {
        "color-primary": "#fd562a",
        "color-primary-variant": "#bf2902",
        "color-bg-primary": "#222222",
        "color-bg-primary-variant": "#2f2f2f",
        "text-light": " #fff",
        "text-light-variant": "#b0aac0",
      },
      fontFamily: {
        "sans - serif": ["Poppins", "sans - serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
      },
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1920px",
      "4xl": "3840px",
    },
  },
  plugins: [],
};
