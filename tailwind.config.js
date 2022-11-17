module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chat-button': '#2AABEE',
        'icons': '#58595b'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
