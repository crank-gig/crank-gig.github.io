/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      spacing: {
        '20px': '20px',
      },
      colors: {
        'regal-blue': '#243c5a',
        'light-grey': '#e6e6e6',
        'heading-color':'#252525',
        'aside-heading':'#282828',
        'button-color':'#202223',
        'aside-color':'#f7f7f7',
        'text-color':'#737373',
      },
    },
    screens: {
      'gt741': '741px',
    },
  },
  plugins: [],
}
