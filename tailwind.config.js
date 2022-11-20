module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chat-button': '#2AABEE',
        'icons': '#58595b',
        'title': '#414042',
        'links': '#30A9DE',
      },
      flex: {
        'blog-cards': '0 1 calc(50% - 1em)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
