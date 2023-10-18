/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./tailwind-theme.js",
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#2563eb",
        customYellow: "#C97F21",
      },
    },
  },
  plugins: [],
};
