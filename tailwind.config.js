/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BA55D3',
      },
      keyframes: {
        emerge: {
          from: { transfrom: 'translateY(200px)' },
          to: { transfrom: 'translateY(0px)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10%)' },
          '40%': { transform: 'translateX(10%)' },
          '60%': { transform: 'translateX(-10%)' },
          '80%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        emerge: 'emerge 1s ease-in-out',
        shake: 'shake 2s',
      },
    },
  },
  plugins: [],
};