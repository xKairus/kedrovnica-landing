/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"], // Для заголовков и лого
      },
      colors: {
        "cedar-green": "#0F2923",
        terracotta: "#C58B68",
        dark: "#1A1A1A",
      },
    },
  },
  plugins: [],
}
