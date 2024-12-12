/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jpg,png}',
    './src/img/**/*.{html,js,jpg,png,svg}',
    './src/scripts/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#181C14',
        'secondario': '#826C4D',
        'secondario-scuro': '#534127',
      }
    },
  },
  plugins: [

  ],
}

