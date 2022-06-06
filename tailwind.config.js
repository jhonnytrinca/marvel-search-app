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
        },
        titleAnimation: {
          '0%': { transform: 'translateX(0%)', left: '0' },
          '25%': { transform: 'translateX(0%)', left: '0' },
          '75%': { transform: 'translateX(-100%)', left: '100%' },
          '100%': { transform: 'translateX(-100%)', left: '100%' }
        }
      },
      animation: {
        shake: 'shake 0.2s ease-in-out 2',
        'title-animation': '3s linear 0s infinite alternate titleAnimation'
      },
      fontFamily: {
        kdam: ['Kdam Thmor Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
