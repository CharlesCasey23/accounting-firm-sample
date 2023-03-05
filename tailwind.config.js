/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        'main-pink': '#c281e9',
        'light-pink': '#e6bdfd',
        'dark-blue': '#143069',
        'light-blue': '#1d4491',
        'accent-light-green': '#83e975',
        'accent-green': '#33b822',
        'accent-dark-green': '#055817',
        'pink-transparent': '#c381e9b0',
        'green-transparent': '#0558179c',
        'black-transparent': '#0000006e',
        'off-white': '#f7f7f6',
        'border-colour': '#d8d8d8',
      },
    },
  },
  plugins: [],
}
