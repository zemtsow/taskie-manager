/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobileS": "320px",
        "mobileM": "375px",
        "mobileL": "425px",
        "xxl": "1400px",
        "bigTablet": "1921px",
      },
      width: {
        "screen-break": "1920px"
      },
      margin: {
        "y-100": "100px 0"
      },
      padding: {
        "y-100": "100px 0"
      },
    },
  },
  plugins: [],
}

