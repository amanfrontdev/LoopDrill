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
        customLightPurple: '#9300f5',
        lightText: '#00bbff',
        hotpink: '#FF00FF'
      },
    },
  },
  plugins: [],
}