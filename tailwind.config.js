module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "layout": "#343434",
          "body": "#343434F5",
        },
      }
    },
  },
  plugins: [],
}
