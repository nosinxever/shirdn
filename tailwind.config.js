/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '6.25%': { transform: 'rotate(360deg)' },
          '12.5%': { transform: 'rotate(720deg)' },
          '18.75%': { transform: 'rotate(1080deg)' },
          '25%': { transform: 'rotate(1440deg)' },
          '31.25%': { transform: 'rotate(1800deg)' },
          '37.5%': { transform: 'rotate(2160deg)' },
          '43.75%': { transform: 'rotate(2520deg)' },
          '50%': { transform: 'rotate(2880deg)' },
          '56.25%': { transform: 'rotate(3240deg)' },
          '62.5%': { transform: 'rotate(3600deg)' },
          '68.75%': { transform: 'rotate(3960deg)' },
          '75%': { transform: 'rotate(4320deg)' },
          '81.25%': { transform: 'rotate(4680deg)' },
          '87.5%': { transform: 'rotate(5040deg)' },
          '93.75%': { transform: 'rotate(5400deg)' },
          '100%': { transform: 'rotate(5760deg)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        roll: 'roll 4s ease-in-out',

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}