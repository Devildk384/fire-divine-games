// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // adjust to your src
  theme: {
    extend: {
      animation: {
        bounceDown: 'bounceDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        bounceUp: 'bounceUp 0.5s ease-in-out',
      },
      keyframes: {
        bounceDown: {
          '0%': { transform: 'translateY(-100%)' },
          '60%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-20px)' },
          '90%': { transform: 'translateY(0)' },
          '95%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
