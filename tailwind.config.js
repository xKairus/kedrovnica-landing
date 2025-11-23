/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#2F80ED", 
        secondary: "#27AE60", 
        dark: "#1F2937",
      },
    },
  },
  plugins: [],
}
