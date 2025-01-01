/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#1e2528",
        secondary: "#3A504B",
        accent: "#0EF6BE",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
