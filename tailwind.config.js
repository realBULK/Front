/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        base: '0px 5px 4px -2px rgba(0, 0, 0, 0.25)',
        whiteBox: '0px 2px 5px -2px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        base: '0.938rem',
      },
    },
  },
  plugins: [],
}
