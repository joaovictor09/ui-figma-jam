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
          '0%': { marginTop: '100%' },
          '100%': { marginTop: '0%'}
        },
        appearToolbar: {
          '0%': { transform: 'translateY(100%)'},
          '100%': { transform: 'translateY(0)'}
        }
      },
      animation: {
        'appearing': 'appear 0.1s linear',
        'appearingToolbar': 'appearToolbar 0.1s linear'
      }
    },
  },
  plugins: [],
}
