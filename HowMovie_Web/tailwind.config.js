/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        '2xl': '3px 4px 1px rgb(33 34 43/100)',
      },
      dropShadow: {
        'bt-md': '0 10px 8px rgba(0, 0, 0, 0.5)',
        'br-md': '10px 10px 8px rgba(0, 0, 0, 0.5)',
      },
      // keyframes: {
      //   'fade-in': {
      //     '0%': {
      //       opacity: '0.4',
      //       // display: 'hideen',
      //     },
      //     '100%': {
      //       opacity: '1',
      //       // display: 'flex',
      //     },
      //   },
      //   'fade-out': {
      //     from: {
      //       opacity: '1',
      //       display: 'flex',
      //     },
      //     to: {
      //       opacity: '0',
      //       display: 'hideen',
      //     },
      //   },
      // },
      // animation: {
      //   'fade-in': 'fade-in 2s ease-out',
      //   'fade-out': 'fade-out 0.5s ease-out',
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
  ],
};
