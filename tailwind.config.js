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
      },
      fontFamily: {
        titleFont: ['Poppins'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        waving: 'wave 3s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
