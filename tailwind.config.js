/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#1B4D3E",
        primaryOrange: "#BE5103",
        warmGray: "#F5F0E9",
        charcoal: "#333333",
        sage: "#A8C686",
        beige: "#F0E6D2",
      },
    },
  },
  plugins: [],
}
