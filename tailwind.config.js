module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
    extend: {
      display: ['dark']
    },
  },
  theme: {
    extend: {
      colors: {
        'chat-button': '#2AABEE',
        'icons': '#58595b',
        'title': '#2d2a26',
        'links': '#30A9DE',
        'navigation': '#18181b',
        'title-main': '#090707',
        'title-dark': '#EFDC05',
        'blue': '#30A9DE',
        'test': '#f2f8f9',
        'one': '#cccccc',
        'light-blue': '#a5dff9',
        'liked': '#F7AA97'
      },
      boxShadow: {
        projects: '0px 4px 8px rgb(38 38 38 / 20%)'
      },
      flex: {
        'blog-cards': '0 1 calc(50% - 1em)'
      },
      fontFamily: {
        titleFont: ['Poppins'],
        checkFont: ['Roboto']
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
