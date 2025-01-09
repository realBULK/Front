/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ['GmarketSans', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
