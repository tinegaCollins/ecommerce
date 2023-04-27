module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#333',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}