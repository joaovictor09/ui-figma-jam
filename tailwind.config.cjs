/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)'}
        }
      },
      animation: {
        'appearing': 'appear 0.1s linear'
      }
    },
  },
  plugins: [],
}
