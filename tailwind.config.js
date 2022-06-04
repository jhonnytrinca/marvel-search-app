module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { 'margin-left': '0rem' },
          '25%': { 'margin-left': '0.5rem' },
          '50%': { 'margin-left': '-0.5rem' },
          '75%': { 'margin-left': '0rem' }
        }
      },
      animation: {
        shake: 'shake 0.2s ease-in-out 2'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
