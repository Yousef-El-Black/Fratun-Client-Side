const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    colors: {
      electricGreen: {
        DEFAULT: '#0BF106',
      },
      eerieBlack: {
        DEFAULT: '#1E1E1E'
      },
      honeydew: {
        DEFAULT: '#F0FFF0'
      },
      raisinBlack: {
        DEFAULT: '#212121'
      }
    }
  },
  plugins: [],
};
