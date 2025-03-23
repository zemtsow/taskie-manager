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
      colors: {
        "primary": "#1c3520",
        "secondary": "#ccff99",
        "third": "#39ff14",
        "blast": "#b6ff00",
        "limmer": "#a3ff00"
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

