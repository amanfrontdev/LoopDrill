/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        customPurple: '#7100b8',
        customLightPurple: '#7448fe',
        lightText: '#00bbff',
        hotpink: '#FF00FF',
        DarkBlack: "#0c171f",
        DarkGray: "#101C26"
      },

    },
  },
  plugins: [],
}