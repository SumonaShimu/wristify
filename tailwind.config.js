/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "dark" : "#171a1d",

          "primary": "#ffd700",

          "secondary": "#57abba",

          "accent": "#D9534F",

          "neutral": "#021431",

          "base-100": "#171a1d",

          "info": "#3194F6",

          "success": "#5FC992",

          "warning": "#F7DE2D",

          "error": "#E60300",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

